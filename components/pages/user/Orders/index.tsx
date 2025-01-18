
import React, { useState, useEffect } from "react";
import { OrderContainer, Header, Tabs, Tab, Title, List } from "./styled";
import Empty from "./Empty";
import ListItem from "./ListItem";
import { ResultGetMemberOrdersType } from "@/types/getOrders";

type Order = ResultGetMemberOrdersType["data"][0];

type OrdersProps = {
  setActiveOrder: (order: Order) => void;
  ordersData?: Order[];
};

type ActiveTab = "全部訂單" | "已結案";

const Orders: React.FC<OrdersProps> = ({ setActiveOrder, ordersData }) => {

  console.log("ordersData", ordersData);
  const [activeTab, setActiveTab] = useState<ActiveTab>("全部訂單");
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (ordersData) {
      const filtered = ordersData.filter((order) => {
        if (activeTab === "全部訂單") return true;
        if (activeTab === "已結案") return order.orderStatus === "已結案";
        return false;
      });
      setFilteredOrders(filtered);
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
        {filteredOrders.length === 0 ? (
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