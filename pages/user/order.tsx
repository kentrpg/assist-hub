import UserPage from "@/components/pages/user/UserPage";
import { MainWrapper } from "@/styles/wrappers";

const Order = () => {
  return (
    <MainWrapper>
      <UserPage initialTab="order" />;
    </MainWrapper>
  );
};

export default Order;
