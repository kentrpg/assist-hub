import React, { useState, useEffect } from "react";
import { OrderContainer, Header, Tabs, Tab, Title, List } from "./styled";
import Empty from "./Empty";
import ListItem from "./ListItem";
import { ResultGetMemberOrdersType } from "@/types/getOrders";
import Loading from "@/components/ui/Loading";

type Order = ResultGetMemberOrdersType["data"][0];

type OrdersProps = {
  setActiveOrder: (order: Order) => void;
  ordersData?: Order[];
};

type ActiveTab = "全部訂單" | "已結案";

const Orders: React.FC<OrdersProps> = ({ setActiveOrder, ordersData }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("全部訂單");
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true); // 新增 loading 狀態

  useEffect(() => {
    if (ordersData) {
      const filtered = ordersData.filter((order) => {
        if (activeTab === "全部訂單") return true;
        if (activeTab === "已結案") return order.orderStatus === "已結案";
        return false;
      });
      setFilteredOrders(filtered);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [activeTab, ordersData]);

  return (
    <OrderContainer>
      <Header>
        <Title>我的訂單</Title>
        <Tabs>
          <Tab
            $active={activeTab === "全部訂單"}
            onClick={() => setActiveTab("全部訂單")}
          >
            全部訂單
          </Tab>
          <Tab
            $active={activeTab === "已結案"}
            onClick={() => setActiveTab("已結案")}
          >
            已結案
          </Tab>
        </Tabs>
      </Header>
      <List>
        {loading ? (
          <Loading />
        ) : filteredOrders.length === 0 ? (
          <Empty />
        ) : (
          filteredOrders.map((order) => (
            <ListItem
              key={order.orderId}
              order={order}
              onViewDetails={() => setActiveOrder(order)}
            />
          ))
        )}
      </List>
    </OrderContainer>
  );
};

export default Orders;
