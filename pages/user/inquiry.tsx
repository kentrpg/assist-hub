import UserPage from "@/components/pages/user/UserPage";
import { MainWrapper } from "@/styles/wrappers";

const Inquiry = () => {
  return (
    <MainWrapper>
      <UserPage initialTab="inquiry" />;
    </MainWrapper>
  );
};

export default Inquiry;
