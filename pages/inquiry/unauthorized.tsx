import { MainWrapper } from "@/styles/wrappers";
import Unauthorized from "@/components/pages/inquiry/Unauthorized";

const NotFoundPage = () => {
  return (
    <>
      <MainWrapper>
        <Unauthorized />
      </MainWrapper>
    </>
  );
};

export default NotFoundPage;
