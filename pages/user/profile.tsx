import UserPage from "@/components/pages/user/UserPage";
import { Wrapper100 } from "@/styles/wrappers";
import { GetServerSideProps } from "next";
import { setUser } from "@/utils/redux/slices/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FormData } from "@/components/pages/user/Profile/Form/data";
import getProfile from "@/utils/api/member/getProfile";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // TBD: 問學長這邊是否有比 !token 更簡單的判斷方式，讓型別驗證會通過
  const token = req.cookies.token;

  console.log("profile token", token);

  if (!token) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  const result = await getProfile(token);

  console.log("profile result", result);

  return {
    props: {
      userData: result.data,
    },
  };
};

const Profile = ({ userData }: { userData: FormData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      dispatch(setUser(userData));
    }
  }, [dispatch, userData]);

  return (
    <Wrapper100>
      <UserPage initialTab="profile" />
    </Wrapper100>
  );
};

export default Profile;
