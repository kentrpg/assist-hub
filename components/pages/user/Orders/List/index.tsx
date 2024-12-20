import React from "react";
import {
  OrderList,
  Header,
  Major,
  Type,
  Info,
  Id,
  Created,
  Price,
  Main,
  Finished,
  Status,
  Table,
  Thead,
  Tr,
  RentHeader,
  OthersHeader,
  NameHeader,
  Tbody,
  Description,
  Product,
  Name,
  Feature,
  DetailsBtn,
  BtnContainer,
  QuantityrHeader,
  Quantity,
  Rent,
  Others,
} from "./styled";

import { Order } from "../data";

const img =
  "https://www.karma.com.tw/wp-content/uploads/2018/08/TW-KM-8520X-1050x960-front.png";

type ListProps = {
  order: Order;
  onViewDetails: () => void;
};

const List = ({ order, onViewDetails }: ListProps) => {
  const {
    deliveryType,
    orderId,
    createdTime,
    finishedDate,
    status,
    quantity,
    rent,
    deliveryFee,
    deposit,
    description,
  } = order;

  const totalPrice = (quantity * rent + deposit + deliveryFee).toLocaleString();

  return (
    <OrderList>
      <Header $deliveryType={deliveryType}>
        <Major>
          <Type>{deliveryType}</Type>
          <Info>
            <Id>訂單編號 {orderId}</Id>
            <Created>訂單時間 {createdTime}</Created>
          </Info>
        </Major>
        <Price>{totalPrice}元</Price>
      </Header>
      <Main>
        <Finished>{finishedDate}</Finished>
        <Status $status={status}>{status}</Status>
      </Main>
      <Table>
        <Thead>
          <Tr>
            <NameHeader>輔具名稱</NameHeader>
            <QuantityrHeader>數量</QuantityrHeader>
            <RentHeader>租金</RentHeader>
            <OthersHeader>其他費用</OthersHeader>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Product>
              <img src={img} width={66} height={66} alt="XX輪椅" />
              <Description>
                <Name>精品輪椅</Name>
                <Feature>{description}</Feature>
              </Description>
            </Product>
            <Quantity>X{quantity}</Quantity>
            <Rent>{rent.toLocaleString()}元</Rent>
            <Others>{deposit + deliveryFee}元</Others>
            <BtnContainer>
              <DetailsBtn onClick={onViewDetails}>查看訂單</DetailsBtn>
            </BtnContainer>
          </Tr>
        </Tbody>
      </Table>
    </OrderList>
  );
};

export default List;
