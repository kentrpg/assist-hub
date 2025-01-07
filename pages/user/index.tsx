import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/user/profile",
      permanent: false, 
    },
  };
};

const User = () => null;

export default User;
