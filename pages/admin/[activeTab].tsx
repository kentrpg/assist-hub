import { GetServerSideProps } from "next";
import Head from "next/head";
import AdminLayout from "@/components/pages/admin/Layout";
import OrderList from "@/components/pages/admin/OrderList";
import SuggestList from "@/components/pages/admin/SuggestList";
import { OrderDataType } from "@/types/getAdminOrders";
import { InquiriesDataType } from "@/types/getAdminInquiries";
import getOrders from "@/utils/api/admin/getOrders";
import getAdminInquiries from "@/utils/api/admin/getInquiries";
import { hasError } from "@/helpers/api/status";
import { ApiResponse } from "@/helpers/api/types";
import { filterOrderMapping } from "@/components/pages/admin/OrderList/data";
import { filterSuggestMapping } from "@/components/pages/admin/SuggestList/data";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/ui/Loading";

const whitelist = ["orders", "user", "suggests", "diagram"];

type AdminPageProps = {
  activeTab: string;
  data: ProcessedSuggestData | ProcessedOrderData;
};

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

  Object.keys(filterOrderMapping).forEach((label) => {
    processedData[label] = {
      data: [],
      count: 0,
    };
  });

  processedData["全部"] = {
    data: data,
    count: data.length,
  };

  const statusTypes = [
    { key: "orderStatus" as const },
    { key: "shippingStatus" as const },
  ] as const;

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
  suggests: (token: string) => getAdminInquiries(token),
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

  if (activeTab === "orders") {
    const processedData = processOrderData(result.data as OrderDataType[]);
    return {
      props: {
        activeTab,
        data: processedData,
      },
    };
  }

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

const AdminPage = ({ activeTab, data }: AdminPageProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

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
    if (isLoading) {
      return <Loading />;
    }

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
