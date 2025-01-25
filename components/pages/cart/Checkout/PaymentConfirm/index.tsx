import { Wrapper60 as MainWrapper } from "@/styles/wrappers";

const PaymentConfirm = ({ message = "付款異常" }: { message?: string }) => {
  return (
    <MainWrapper>
      <p>{message}</p>
    </MainWrapper>
  );
};

export default PaymentConfirm;
