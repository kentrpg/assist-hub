import { GetServerSideProps } from "next";
import Head from "next/head";
import AdminLayout from "@/components/pages/admin/Layout";
import OrderList from "@/components/pages/admin/OrderList";
import SuggestList from "@/components/pages/admin/SuggestList";
import { OrderDataType } from "@/types/getAdminOrders";
import { InquiriesDataType } from "@/types/getMemberInquiries";
import getOrders from "@/utils/api/admin/getOrders";
import getInquiries from "@/utils/api/member/getInquiries";
import { hasError, isValid } from "@/helpers/api/status";
import { ApiResponse } from "@/helpers/api/types";
import { filterOrderMapping } from "@/components/pages/admin/OrderList/data";
import { filterSuggestMapping } from "@/components/pages/admin/SuggestList/data";

const whitelist = ["orders", "user", "suggests", "diagram"];

type dataType = OrderDataType[] | InquiriesDataType[];

type ProcessedOrderData = {
  [key: string]: {
    data: OrderDataType[];
    count: number;
  };
};

type ProcessedSuggestData = {
  [key: string]: {
    data: InquiriesDataType[];
    count: number;
  };
};

const processSuggestData = (
  data: InquiriesDataType[],
): ProcessedSuggestData => {
  const processedData: ProcessedSuggestData = {};

  Object.keys(filterSuggestMapping).forEach((label) => {
    processedData[label] = {
      data: [],
      count: 0,
    };
  });

  processedData["全部"] = {
    data: data,
    count: data.length,
  };

  processedData["未回覆"] = {
    data: data.filter((inquiry) => !inquiry.isReplied),
    count: data.filter((inquiry) => !inquiry.isReplied).length,
  };

  processedData["已回覆"] = {
    data: data.filter((inquiry) => inquiry.isReplied),
    count: data.filter((inquiry) => inquiry.isReplied).length,
  };

  console.log("processedData", processedData);

  return processedData;
};

const processOrderData = (data: OrderDataType[]): ProcessedOrderData => {
  const processedData: ProcessedOrderData = {};

  // 初始化所有狀態的資料結構
  Object.keys(filterOrderMapping).forEach((label) => {
    processedData[label] = {
      data: [],
      count: 0,
    };
  });

  // 初始化全部類別資料
  processedData["全部"] = {
    data: data,
    count: data.length,
  };

  const statusTypes = [
    { key: "orderStatus" as const },
    { key: "shippingStatus" as const },
  ] as const;

  // 統一處理不同狀態類型的資料
  data.forEach((order) => {
    statusTypes.forEach(({ key }) => {
      const status = order[key];
      if (status) {
        if (!processedData[status]) {
          processedData[status] = {
            data: [],
            count: 0,
          };
        }
        processedData[status].data.push(order);
        processedData[status].count++;
      }
    });
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

  // 處理建議資料
  if (activeTab === "suggests") {
    const processedData = processSuggestData(
      result.data as InquiriesDataType[],
    );
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
  data: ProcessedSuggestData | ProcessedOrderData;
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
        return <SuggestList data={data as ProcessedSuggestData} />;
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
