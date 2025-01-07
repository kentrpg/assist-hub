import UserPage from "@/components/pages/user/UserPage";
import { Wrapper100 } from "@/styles/wrappers";

const Profile = () => {
  return (
    <Wrapper100>
      <UserPage initialTab="profile" />
    </Wrapper100>
  );
};

export default Profile;
