import { NextPage, GetServerSideProps } from "next";
import React, { useEffect } from "react";
import UserPage from "@/components/pages/user/UserPage";
import { Wrapper100 } from "@/styles/wrappers";
import { setUser } from "@/utils/redux/slices/user";
import { useDispatch } from "react-redux";
import { FormData } from "@/components/pages/user/Profile/Form/data";
import getProfile from "@/utils/api/member/getProfile";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token;

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

type ProfileProps = {
  userData: FormData;
};

const Profile: NextPage<ProfileProps> = ({ userData }) => {
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
