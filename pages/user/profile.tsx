import UserPage from "@/components/pages/user/UserPage";
import { Wrapper100 } from "@/styles/wrappers";
import { GetServerSideProps } from "next";
import { setUser } from "@/utils/redux/slices/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FormData } from "@/components/pages/user/Profile/Form/data";
import getProfile from "@/utils/api/member/getProfile";
import { parse } from "cookie";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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

  // export const getServerSideProps: GetServerSideProps = async (context) => {
  //   try {
  //     const cookies = context.req.headers.cookie
  //       ? parse(context.req.headers.cookie)
  //       : {};
  //     const token = cookies.token;

  //     if (!token) {
  //       throw new Error("Token is missing from cookies");
  //     }

  //     const response = await fetch("http://52.172.145.130:8080/api/v1/member/profile", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const json = await response.json();

  //     if (!response.ok || !json.status || json.statusCode !== 200) {
  //       throw new Error(json.message || "Failed to fetch user data");
  //     }

  //     return { props: { userData: json.data } };
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);

  //     return { props: { userData: null } };
  //   }
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
