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
import { ResultGetMemberOrdersType } from "@/types/getOrders";

type Order = ResultGetMemberOrdersType["data"][0];

type ListProps = {
  order: Order;
  onViewDetails: () => void; // 查看訂單詳情的回調函數
};

const ListItem: React.FC<ListProps> = ({ order, onViewDetails }) => {
  const {
    orderId,
    orderStatus,
    shippingStatus,
    orderCode,
    createdDate,
    createdStamp,
    shipping,
    details: {
      quantity,
      productName,
      productDes,
      productImgSrc,
      productImgAlt,
      rent,
      deposit,
      finalAmount,
      rentDate,
      rentStamp,
      returnDate,
      returnStamp,
    },
  } = order;

  return (
    <Item>
      <Header>
        <Major>
          <Type>{shipping}</Type>
          <Info>
            <Id>訂單編號 {orderCode}</Id>
            <Created>訂單時間 {createdStamp}</Created>
          </Info>
        </Major>
        <Price>元</Price>
      </Header>
      <Main>
        <Finished>預計抵達日期{rentStamp}</Finished>
        <Status>{orderStatus}</Status>
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
                <img
                  src={productImgSrc}
                  width={66}
                  height={66}
                  alt={productImgAlt}
                />
                <Description>
                  <Name>{productName}</Name>
                  <Feature>{productDes}</Feature>
                </Description>
              </Product>
              <Quantity>x{quantity}</Quantity>
              <Rent>{rent}元</Rent>
              <Others>{deposit}元</Others>
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
