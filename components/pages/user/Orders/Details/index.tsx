const img =
  "https://www.karma.com.tw/wp-content/uploads/2018/08/TW-KM-8520X-1050x960-front.png";
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
  TableContainer,
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
  Col,
  ColGroup,
} from "../ListItem/styled";
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
  DetailContainer,
  RentInfo,
} from "./styled";
import { MdArrowBack } from "react-icons/md";
import { Order } from "../data";
import Progress from "./Progress";

type DetailsProps = {
  order: Order;
  onBack: () => void;
};

const Details = ({ order, onBack }: DetailsProps) => {
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
    period,
    payment,
    name,
    email,
    phone,
  } = order;

  const totalPrice = (quantity * rent + deposit + deliveryFee).toLocaleString();

  return (
    <DetailContainer>
      <BackToOrders>
        <Icon onClick={onBack}>
          <MdArrowBack size={16} color="White" />
        </Icon>
        <Title onClick={onBack}>全部訂單</Title>
      </BackToOrders>
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
          <Finished>{finishedDate}</Finished>
          <Status $status={status}>{status}</Status>
        </Main>
        {deliveryType === "宅配" && <Progress />}
        <TableContainer>
          <Table>
            <ColGroup>
              <Col style={{ width: "40%" }} />
              <Col style={{ width: "12.5%" }} />
              <Col style={{ width: "12.5%" }} />
              <Col style={{ width: "12.5%" }} />
              <Col style={{ width: "12.5%" }} />
            </ColGroup>
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
                <Quantity>x{quantity}</Quantity>
                <Rent>{rent.toLocaleString()}元</Rent>
                <Deposit>{deposit}元</Deposit>
                <Fee>{deliveryFee}元</Fee>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Footer>
          <RentInfo>
            <Detail>
              <Span>租賃資訊</Span>
              <Rental>
                <Row>
                  <P $type="title">租賃日期</P>
                  <P $type="content">2024/11/28 到 2024/12/28</P>
                </Row>
                <Row>
                  <P $type="title">租賃期約</P>
                  <P $type="content">{period}個月</P>
                </Row>
                <Row>
                  <P $type="title">付款方式</P>
                  <P $type="content">{payment}</P>
                </Row>
              </Rental>
            </Detail>
            <Detail>
              <Span>取貨資訊</Span>
              <Row>
                <P $type="title">姓名</P>
                <P $type="content">{name}</P>
              </Row>
              <Row>
                <P $type="title">手機號碼</P>
                <P $type="content">{phone}</P>
              </Row>
              <Row>
                <P $type="title">電子信箱</P>
                <P $type="content">{email}</P>
              </Row>
            </Detail>
          </RentInfo>
          <Remark>
            <Span>備註</Span>
            <Delivery></Delivery>
          </Remark>
        </Footer>
      </Item>
    </DetailContainer>
  );
};

export default Details;
