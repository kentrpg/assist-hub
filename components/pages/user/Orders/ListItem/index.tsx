import React from "react";
import {
  Item,
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
  Col,
  ColGroup,
  TableContainer,
} from "./styled";

import { Order } from "../data";

const img =
  "https://www.karma.com.tw/wp-content/uploads/2018/08/TW-KM-8520X-1050x960-front.png";

type ListProps = {
  order: Order;
  onViewDetails: () => void;
  orderIdData: number;
};

const ListItem = ({ order, onViewDetails, orderIdData }: ListProps) => {
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

  console.log("orderIdData", orderIdData);

  const totalPrice = (quantity * rent + deposit + deliveryFee).toLocaleString();

  return (
    <Item>
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
        <Finished>預計抵達日期 {finishedDate}</Finished>
        <Status $status={status}>{status}</Status>
      </Main>
      <TableContainer>
        <Table>
          <ColGroup>
            <Col style={{ width: "40%" }} />
            <Col style={{ width: "15%" }} />
            <Col style={{ width: "15%" }} />
            <Col style={{ width: "15%" }} />
            <Col style={{ width: "15%" }} />
          </ColGroup>
          <Thead>
            <Tr>
              <NameHeader>輔具名稱</NameHeader>
              <QuantityrHeader>數量</QuantityrHeader>
              <RentHeader>租金</RentHeader>
              <OthersHeader>其他費用</OthersHeader>
              <th></th>
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
              <Quantity>x{quantity}</Quantity>
              <Rent>{rent.toLocaleString()}元</Rent>
              <Others>{deposit + deliveryFee}元</Others>
              <BtnContainer>
                <DetailsBtn onClick={onViewDetails}>查看訂單</DetailsBtn>
              </BtnContainer>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Item>
  );
};

export default ListItem;
