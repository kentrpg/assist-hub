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
  Tbody,
  NameHeader,
  Description,
  Product,
  Name,
  Feature,
  QuantityrHeader,
  Quantity,
  Rent,
} from "../List/styled";
import {
  BackToOrders,
  DepositHeader,
  FeeHeader,
  Icon,
  Fee,
  Deposit,
  Detail,
  Remark,
  Span,
  Title,
  Footer,
  Rental,
  Delivery,
  P,
  Row,
} from "./styled";
import { OrdersContainer } from "../styled";
import { MdArrowBack } from "react-icons/md";
import { Order } from "../data";

const img =
  "https://www.karma.com.tw/wp-content/uploads/2018/08/TW-KM-8520X-1050x960-front.png";

type DetailsProps = {
  order: Order;
};

const Details = ({ order }: DetailsProps) => {
  const {
    deliveryType,
    orderId,
    createdTime,
    finishedDate,
    status,
    quantity,
    rent,
    deposit,
    deliveryFee,
    description,
  } = order;

  const totalPrice = (quantity * rent + deposit + deliveryFee).toLocaleString();

  return (
    <OrdersContainer>
      <BackToOrders>
        <Icon>
          <MdArrowBack size={16} color="White" />
        </Icon>
        <Title>全部訂單</Title>
      </BackToOrders>
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
              <DepositHeader>押金</DepositHeader>
              <FeeHeader>運費</FeeHeader>
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
              <Deposit>{deposit}元</Deposit>
              <Fee>{deliveryFee}元</Fee>
            </Tr>
          </Tbody>
        </Table>
        <Footer>
          <Detail>
            <Span>租賃資訊</Span>
            <Rental>
              <Row>
                <P type="title">租賃日期</P>
                <P type="content">2024/11/28 到 2024/12/28</P>
              </Row>
              <Row>
                <P type="title">租賃期約</P>
                <P type="content">一個月</P>
              </Row>
              <Row>
                <P type="title">付款方式</P>
                <P type="content">Line Pay</P>
              </Row>
            </Rental>
          </Detail>
          <Detail>
            <Span>取貨資訊</Span>
            <Row>
              <P type="title">姓名</P>
              <P type="content">王小姐</P>
            </Row>
            <Row>
              <P type="title">手機號碼</P>
              <P type="content">0912-345678</P>
            </Row>
            <Row>
              <P type="title">電子信箱</P>
              <P type="content">A12345678@gmail.com</P>
            </Row>
            <Row>
              <P type="title">運送地址</P>
              <P type="content">高雄市新興區民生一路</P>
            </Row>
          </Detail>
          <Remark>
            <Span>備註</Span>
            <Delivery></Delivery>
          </Remark>
        </Footer>
      </OrderList>
    </OrdersContainer>
  );
};

export default Details;
