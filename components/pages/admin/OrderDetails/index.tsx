import type { OrderData } from "./data";
import {
  Container,
  Section,
  SectionTitle,
  InfoGrid,
  Label,
  Value,
  StatusTag,
  ModifyButton,
} from "./styled";

const OrderDetails = ({ order }: { order: OrderData }) => {
  return (
    <Container>
      <Section>
        <SectionTitle>訂單狀態</SectionTitle>
        <StatusTag>{order.orderStatus}</StatusTag>
      </Section>

      <Section>
        <SectionTitle>訂單摘要</SectionTitle>
        <InfoGrid>
          <Label>訂單編號</Label>
          <Value>{order.orderCode}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>商品名稱</Label>
          <Value>{order.details.productName}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>租借期間</Label>
          <Value>
            {order.details.rentStamp}
            {order.details.returnStamp}
          </Value>
        </InfoGrid>
        <InfoGrid>
          <Label>租金</Label>
          <Value>${order.details.rent}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>押金</Label>
          <Value>${order.details.deposit}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>運費</Label>
          <Value>${order.details.fee}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>總金額</Label>
          <Value>${order.details.finalAmount}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>付款方式</Label>
          <Value>{order.details.payment}</Value>
        </InfoGrid>
      </Section>

      <Section>
        <SectionTitle>下單用戶</SectionTitle>
        <InfoGrid>
          <Label>用戶帳號</Label>
          <Value>
            {order.member.name}
            {order.member.email}
          </Value>
        </InfoGrid>
        <InfoGrid>
          <Label>line ID</Label>
          <Value>{order.member.lineId}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>電話</Label>
          <Value>{order.member.phone}</Value>
        </InfoGrid>
      </Section>

      <Section>
        <SectionTitle>宅配資料</SectionTitle>
        <InfoGrid>
          <Label>姓名</Label>
          <Value>{order.shippinginfo.name}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>手機</Label>
          <Value>{order.shippinginfo.phone}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>電子郵件</Label>
          <Value>{order.shippinginfo.email}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>郵遞區號</Label>
          <Value>{order.shippinginfo.addressZIP}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>縣市</Label>
          <Value>{order.shippinginfo.addressCity}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>鄉鎮市區</Label>
          <Value>{order.shippinginfo.addressDistrict}</Value>
        </InfoGrid>
        <InfoGrid>
          <Label>詳細地址</Label>
          <Value>{order.shippinginfo.address}</Value>
        </InfoGrid>
      </Section>

      <ModifyButton>修改</ModifyButton>
    </Container>
  );
};

export default OrderDetails;
