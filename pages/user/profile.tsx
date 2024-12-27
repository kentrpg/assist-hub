import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainWrapper } from "@/styles/wrappers";
import Wrapper from "@/components/pages/user/Wrapper/index";
import SideBar from "@/components/pages/user/SideBar";
import Profile from "@/components/pages/user/Profile";
import Orders from "@/components/pages/user/Orders";
import Inquiries from "@/components/pages/user/Inquiries";
import Details from "@/components/pages/user/Orders/Details";
import { Order } from "@/components/pages/user/Orders/data";
import { ActiveTabType } from "@/components/pages/user/SideBar/data";
import { useState } from "react";

const User = () => {
  const [activeTab, setActiveTab] = useState<ActiveTabType>("profile");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const router = useRouter();

  useEffect(() => {
    // 根據 URL 的變化設置 activeTab
    const path = router.pathname.split("/").pop() as ActiveTabType;
    if (path) setActiveTab(path);
  }, [router.pathname]);

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setActiveTab("detail");
    router.push("/user/detail");
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null);
    setActiveTab("order");
    router.push("/user/order");
  };

  return (
    <MainWrapper>
      <Wrapper>
        <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "profile" && <Profile />}
        {activeTab === "order" && <Orders setActiveOrder={handleViewOrder} />}
        {activeTab === "detail" && selectedOrder && (
          <Details order={selectedOrder} onBack={handleBackToOrders} />
        )}
        {activeTab === "inquiry" && <Inquiries />}
      </Wrapper>
    </MainWrapper>
  );
};

export default User;
