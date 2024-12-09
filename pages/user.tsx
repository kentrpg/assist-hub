import Profile from "@/components/pages/user/Profile";
import SideBar from "@/components/pages/user/SideBar";
import { UserContainer } from "@/styles/user";
// import Orders from "@/components/pages/user/Orders";
// import Inquiries from "@/components/pages/user/Inquiries";

const User = () => {
  return (
    <>
      <UserContainer>
        <SideBar/>
        <Profile />
        {/* <Orders /> */}
        {/* <Inquiries /> */}
      </UserContainer>
    </>
  );
};

export default User;
