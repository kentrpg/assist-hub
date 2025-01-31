import Head from "next/head";
import AdminLayout from "@/components/pages/admin/Layout";
import OrderList from "@/components/pages/admin/OrderList";
import { GetStaticPaths, GetStaticProps } from "next";
import Suggests from "./suggests";

const whitelist = ["order", "user", "suggests", "diagram"];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = whitelist.map((tab) => ({
    params: { activeTab: tab },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const activeTab = params?.activeTab as string;

  if (!whitelist.includes(activeTab)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      activeTab,
    },
  };
};

const AdminPage = ({ activeTab }: { activeTab: string }) => {
  const getPageTitle = () => {
    switch (activeTab) {
      case "order":
        return "訂單列表";
      case "user":
        return "會員列表";
      case "suggests":
        return "詢問列表";
      case "diagram":
        return "圖表列表";
      default:
        return "訂單列表";
    }
  };

  const getPageContent = () => {
    switch (activeTab) {
      case "order":
        return <OrderList />;
      case "user":
        return <OrderList />;
      case "suggests":
        return <Suggests />;
      case "diagram":
        return <OrderList />;
      default:
        return <OrderList />;
    }
  };

  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageTitle()} />
      </Head>
      <AdminLayout>{getPageContent()}</AdminLayout>
    </>
  );
};

export default AdminPage;
