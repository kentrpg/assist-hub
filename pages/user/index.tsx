import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/user/profile",
      permanent: false,
    },
  };
};

const User = () => null;

export default User;
