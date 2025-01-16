import UserPage from "@/components/pages/user/UserPage";
import { Wrapper100 } from "@/styles/wrappers";
import { GetServerSideProps } from "next";
import { setUser } from "@/utils/redux/slices/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FormData } from "@/components/pages/user/Profile/Form/data";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await fetch("http://localhost:4002/data").then((res) => {
      if (!res.ok) throw new Error("Failed to fetch user data");
      return res.json();
    });

    return { props: { userData: data } };
  } catch (error) {
    console.error("Error fetching user data:", error);

    return { props: { userData: null } };
  }
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
