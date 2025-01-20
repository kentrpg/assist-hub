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
import { ResultGetMemberOrderType } from "@/types/getOrder";
import Progress from "./Progress";

type DetailsProps = {
  onBack: () => void;
  orderData: ResultGetMemberOrderType["data"];
};

const Details: React.FC<DetailsProps> = ({ onBack, orderData }) => {
  if (!orderData) {
    return <div>Order data is not available</div>;
  }

  const {
    orderStatus,
    shippingStatus,
    orderCode,
    createdDate,
    createdStamp,
    note,
    shipping,
    shippinginfo: { name, phone, email, address },
    details: {
      quantity,
      productName,
      productDes,
      productImgSrc,
      productImgAlt,
      rent,
      deposit,
      fee,
      finalAmount,
      period,
      rentDate,
      rentStamp,
      returnDate,
      returnStamp,
      payment,
    },
  } = orderData;

  return (
    <DetailContainer>
      <BackToOrders>
        <Icon onClick={onBack}>
          <MdArrowBack size={16} color="White" />
        </Icon>
        <Title onClick={onBack}>全部訂單</Title>
      </BackToOrders>
      <Item>
        <Header>
          <Major>
            <Type>{shipping}</Type>
            <Info>
              <Id>訂單編號 {orderCode}</Id>
              <Created>訂單時間</Created>
            </Info>
          </Major>
          <Price>元</Price>
        </Header>
        <Main>
          <Finished>{returnStamp}</Finished>
          <Status>{orderStatus}</Status>
        </Main>

        {/* ProgressBar */}
        {shipping === "宅配" && <Progress />}

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
                <Deposit>{deposit}元</Deposit>
                <Fee>{fee}元</Fee>
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
                  <P $type="content">
                    {rentStamp} 到 {returnStamp}
                  </P>
                </Row>
                <Row>
                  <P $type="title">租賃期約</P>
                  <P $type="content">{period}天</P>
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
              <Row>
                <P $type="title">地址</P>
                <P $type="content">{address}</P>
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
