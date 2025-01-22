import Head from "next/head";
import Layout from "@/components/pages/admin/Layout";
import OrderList from "@/components/pages/admin/OrderList";
import { GetStaticPaths, GetStaticProps } from "next";

const whitelist = ["order", "user", "inquiry", "diagram"];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = whitelist.map((method) => ({
    params: { method },
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
      activeTab
    },
  };
};

const AdminPage = ({ activeTab }: { activeTab: string }) => {

  const adminControls = {
    getTitle: () => {
      switch (activeTab) {
        case "order":
          return "訂單列表";
        case "user":
        return "會員列表";
        case "inquiry":
          return "詢問列表";
        case "diagram":
          return "圖表列表";
        default:
          return "訂單列表";
      }
    },
    getComponent: () => {
      switch (activeTab) {
        case "order":
          return <OrderList />;
        // case "user":
        //   return <UserList />;
        // case "inquiry":
        //   return <InquiryList />;
        // case "diagram":
        //   return <DiagramList />;
      }
    },
  };

  

  return (
    <>
      <Head>
        <title>{adminControls.getTitle()}</title>
        <meta name="description" content={adminControls.getTitle()} />
      </Head>
      <Layout>
        {adminControls.getComponent()}
      </Layout>
    </>
  );
};

export default AdminPage;
