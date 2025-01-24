import { Wrapper60 as MainWrapper } from "@/styles/wrappers";
import { useDispatch, useSelector } from "react-redux";
import { resetLinePay, selectLinePay } from "@/utils/redux/slices/linePay";
import { useEffect, useState } from "react";
import { isValid } from "@/helpers/api/status";
import { useRouter } from "next/router";

const PaymentConfirm = () => {
  const { transactionId, finalAmount } = useSelector(selectLinePay);
  console.log(transactionId, finalAmount);

  const dispatch = useDispatch();
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const confirmPayment = async () => {
      if (!transactionId || !finalAmount) {
        return;
      }

      try {
        const result = await fetch(
          "https://assist-hub.rocket-coding.com/api/v1/linePay/confirm",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              transactionId,
              finalAmount,
            }),
          },
        );

        console.log(result);

        const responseData = await result.json();
        setData(responseData);

        console.log(responseData);

        const redirectPath = isValid(responseData)
          ? `${router.asPath}/approval`
          : `${router.asPath}/declined`;

        console.log(redirectPath);

        router.push(redirectPath);
      } catch (error) {
        console.error("Payment confirmation failed:", error);
      }
    };

    confirmPayment();
    dispatch(resetLinePay());
  }, [transactionId, finalAmount]);

  if (!transactionId || !finalAmount) {
    return <MainWrapper>沒有值</MainWrapper>;
  }

  if (!data) {
    return <MainWrapper>處理中...</MainWrapper>;
  }

  return (
    <MainWrapper>
      <div>{data.statusCode}</div>
      <div>{data.status}</div>
      <div>{data.message}</div>
    </MainWrapper>
  );
};

export default PaymentConfirm;
