import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";
import PaymentConfirm from "@/components/pages/cart/Checkout/PaymentConfirm";
import { Wrapper60 as MainWrapper } from "@/styles/wrappers";
import Head from "next/head";
import Approval from "./approval";
import Declined from "@/components/pages/cart/Checkout/Declined";
import { hasError, isValid } from "@/helpers/api/status";
import {
  PaymentResult,
  PaymentStatus,
} from "@/components/pages/cart/Checkout/PaymentConfirm/data";

const ConfirmPage = () => {
  const router = useRouter();
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("loading");
  const [paymentResult, setPaymentResult] = useState<PaymentResult | null>(
    null,
  );

  useEffect(() => {
    if (!router.isReady) return;

    const confirmPayment = async () => {
      const queryString = router.asPath.split("?")[1] || "";

      console.log("queryString", queryString);

      const response = await fetch(
        `/api/line/getLinepayConfirm?${queryString}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const result = await response.json();
      setPaymentResult(result);
      console.log("result", result);

      // 測試用
      // setPaymentStatus("success");

      switch (result.statusCode) {
        case 200:
          setPaymentStatus("success");
          break;
        case 404:
        case 405:
          router.push("/404");
          break;
        case 400:
          setPaymentStatus("failed");
          break;
        case 500:
        default:
          console.error(
            `未預期的狀態碼: ${result.statusCode}, ${result.error}`,
          );
          setPaymentStatus("invalid");
          break;
      }
    };

    confirmPayment();
  }, [router.isReady, router]);

  const renderContent = () => {
    console.log("paymentStatus", paymentStatus);
    switch (paymentStatus) {
      case "loading":
        return (
          <>
            <Head>
              <title>訂單付款中</title>
              <meta name="description" content="訂單付款中" />
            </Head>
            <h1>訂單付款中</h1>
            <Loading />
          </>
        );
      case "success":
        return (
          <>
            <Head>
              <title>付款成功</title>
              <meta name="description" content="付款成功" />
            </Head>
            <Approval />
          </>
        );
      case "failed":
        return (
          <>
            <Head>
              <title>付款失敗</title>
              <meta name="description" content="付款失敗" />
            </Head>
            <Declined />
          </>
        );
      case "invalid":
        return (
          <>
            <Head>
              <title>無效的請求</title>
              <meta name="description" content="無效的請求" />
            </Head>
            <PaymentConfirm message={paymentResult?.message} />
          </>
        );
    }
  };

  return <MainWrapper>{renderContent()}</MainWrapper>;
};

export default ConfirmPage;
