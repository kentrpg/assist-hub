import Profile from "@/components/pages/user/Profile";
import SideBar from "@/components/pages/user/SideBar";
import WrapperLayout from "@/components/pages/user/WrapperLayout";
import { Container } from "@/components/pages/user/WrapperLayout/styled";
// import Orders from "@/components/pages/user/Orders";
// import Inquiries from "@/components/pages/user/Inquiries";

const User = () => {
  return (
    <WrapperLayout>
      <Container>
        <SideBar />
        <Profile />
      </Container>
      {/* <Orders /> */}
      {/* <Inquiries /> */}
    </WrapperLayout>
  );
};

export default User;
