import React, { useState } from "react";
import { Container, Header, Tabs, Tab, Title, List } from "./styled";
import { orders, Order } from "./data";
import Empty from "./Empty";
import ListItem from "./ListItem";

type OrdersProps = {
  setActiveOrder: (order: Order) => void;
};

type ActiveTab = "全部訂單" | "已結案" | "租賃中";

const Orders: React.FC<OrdersProps> = ({ setActiveOrder }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("全部訂單");

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "全部訂單") return true;
    if (activeTab === "已結案") return order.status === "已結案";
    if (activeTab === "租賃中") return order.status === "租賃中";
    return false;
  });

  return (
    <Container>
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
            $active={activeTab === "租賃中"}
            onClick={() => setActiveTab("租賃中")}
          >
            租賃中
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
    </Container>
  );
};

export default Orders;
