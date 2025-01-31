import AdminLayout from "@/components/pages/admin/Layout";
import OrderList from "@/components/pages/admin/OrderList";
import Head from "next/head";

const Suggests = () => {
  return (
    <>
      <Head>
        <title>建議單列表</title>
        <meta name="description" content="建議單列表" />
      </Head>
      <AdminLayout>
        <OrderList />
      </AdminLayout>
    </>
  );
};

export default Suggests;
