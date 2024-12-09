import Profile from "@/components/pages/user/Profile";
import { UserContainer } from "@/styles/user";
// import Orders from "@/components/pages/user/Orders";
// import Inquiries from "@/components/pages/user/Inquiries";

const User = () => {
  return (
    <>
      <UserContainer>
        <Profile />
        {/* <Orders /> */}
        {/* <Inquiries /> */}
      </UserContainer>
    </>
  );
};

export default User;
