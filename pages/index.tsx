import { NextPage } from "next";
import Home from "@/components/pages/home";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>RENT4U 輔具租賃網</title>
        <meta
          name="description"
          content="讓線上輔具租賃流程更加簡單、直觀，讓用戶無縫接軌從選擇到租賃的每一個步驟。"
        />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
