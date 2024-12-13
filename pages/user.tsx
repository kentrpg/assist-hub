import Profile from "@/components/pages/user/Profile";
import SideBar from "@/components/pages/user/SideBar";
import Wrapper from "@/components/pages/user/Wrapper";
import { Container } from "@/components/pages/user/Wrapper/styled";
// import Orders from "@/components/pages/user/Orders";
// import Inquiries from "@/components/pages/user/Inquiries";

const User = () => {
  return (
    <Wrapper>
      <Container>
        <SideBar />
        <Profile />
      </Container>
      {/* <Orders /> */}
      {/* <Inquiries /> */}
    </Wrapper>
  );
};

export default User;
