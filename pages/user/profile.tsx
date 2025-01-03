import UserPage from "@/components/pages/user/UserPage";
import { MainWrapper } from "@/styles/wrappers";

const Profile = () => {
  return (
    <MainWrapper>
      <UserPage initialTab="profile" />;
    </MainWrapper>
  );
};

export default Profile;
