import React from "react";
import {
  OrdersContainer,
  Header,
  Tabs,
  Tab,
  Title,
  OrderLists,
} from "./styled";
import { orders, Order } from "./data";
import List from "./List";

type OrdersProps = {
  setActiveOrder: (order: Order) => void;
};

const Orders = ({ setActiveOrder }: OrdersProps) => {
  const handleViewOrder = (order: Order) => {
    setActiveOrder(order);
  };

  return (
    <OrdersContainer>
      <Header>
        <Title>我的訂單</Title>
        <Tabs>
          <Tab>全部訂單</Tab>
          <Tab>已結案</Tab>
          <Tab>租賃中</Tab>
        </Tabs>
      </Header>
      <OrderLists>
        {orders.map((order) => (
          <List
            key={order.orderId}
            order={order}
            onViewDetails={() => handleViewOrder(order)}
          />
        ))}
      </OrderLists>
    </OrdersContainer>
  );
};

export default Orders;
