import { GetServerSideProps } from "next";
import Head from "next/head";
import AdminLayout from "@/components/pages/admin/Layout";
import OrderList from "@/components/pages/admin/OrderList";
import SuggestList from "@/components/pages/admin/SuggestList";
import { OrderDataType } from "@/types/getAdminOrders";
import { InquiriesDataType } from "@/types/getMemberInquiries";
import getOrders from "@/utils/api/admin/getOrders";
import getInquiries from "@/utils/api/member/getInquiries";
import { hasError } from "@/helpers/api/status";
import { ApiResponse } from "@/helpers/api/types";
import { filterIconMapping } from "@/components/pages/admin/OrderList/data";

const whitelist = ["orders", "user", "suggests", "diagram"];

type dataType = OrderDataType[] | InquiriesDataType[];

type ProcessedOrderData = {
  [key: string]: {
    data: OrderDataType[];
    count: number;
  };
};

const processOrderData = (data: OrderDataType[]): ProcessedOrderData => {
  const processedData: ProcessedOrderData = {};

  Object.keys(filterIconMapping).forEach((label) => {
    processedData[label] = {
      data: [],
      count: 0,
    };
  });

  processedData["全部"] = {
    data: data,
    count: data.length,
  };

  data.forEach((order) => {
    if (order.orderStatus) {
      if (!processedData[order.orderStatus]) {
        processedData[order.orderStatus] = {
          data: [],
          count: 0,
        };
      }
      processedData[order.orderStatus].data.push(order);
      processedData[order.orderStatus].count++;
    }

    if (order.shippingStatus) {
      if (!processedData[order.shippingStatus]) {
        processedData[order.shippingStatus] = {
          data: [],
          count: 0,
        };
      }
      processedData[order.shippingStatus].data.push(order);
      processedData[order.shippingStatus].count++;
    }
  });

  return processedData;
};

const dataFetchingMapping = {
  orders: (token: string) => getOrders(token),
  suggests: (token: string) => getInquiries(token),
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const activeTab = params?.activeTab as string;
  const token = req.cookies.token || "";

  if (!whitelist.includes(activeTab)) {
    return {
      notFound: true,
    };
  }

  const fetchData =
    dataFetchingMapping[activeTab as keyof typeof dataFetchingMapping];

  const result = await fetchData(token);

  if (hasError(result as ApiResponse<dataType>)) {
    return {
      notFound: true,
    };
  }

  // 處理訂單資料
  if (activeTab === "orders") {
    const processedData = processOrderData(result.data as OrderDataType[]);
    return {
      props: {
        activeTab,
        data: processedData,
      },
    };
  }

  return {
    props: {
      activeTab,
      data: result.data || [],
    },
  };
};

type AdminPageProps = {
  activeTab: string;
  data: dataType | ProcessedOrderData;
};

const AdminPage = ({ activeTab, data }: AdminPageProps) => {
  const getPageTitle = () => {
    switch (activeTab) {
      case "orders":
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
      case "orders":
        return <OrderList data={data as ProcessedOrderData} />;
      case "user":
        return <OrderList data={data as ProcessedOrderData} />;
      case "suggests":
        return <SuggestList data={data as InquiriesDataType[]} />;
      case "diagram":
        return <OrderList data={data as ProcessedOrderData} />;
      default:
        return <OrderList data={data as ProcessedOrderData} />;
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
