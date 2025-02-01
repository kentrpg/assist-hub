import { useState, type FormEvent } from "react";
import type { OrderData, ToastType } from "./data";
import {
  FormContainer,
  Section,
  SectionTitle,
  StatusTag,
  InfoGrid,
  Label,
  StaticText,
  Input,
  SubmitButton,
} from "./styled";
import {
  MdReceipt,
  MdPerson,
  MdLocalShipping,
} from "react-icons/md";
import Toast from "@/components/ui/Toast";

const OrderDetails = ({ order }: { order: OrderData }) => {
  const [shipping, setShipping] = useState(order.shippinginfo);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submit");
    setShowToast(true);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Section>
        <SectionTitle>訂單狀態</SectionTitle>
        <StatusTag>{order.orderStatus}</StatusTag>
      </Section>

      <Section>
        <SectionTitle>
          <MdReceipt size={24} />
          訂單摘要
        </SectionTitle>
        <InfoGrid>
          <Label>訂單編號</Label>
          <StaticText>{order.orderCode}</StaticText>
        </InfoGrid>
        <InfoGrid>
          <Label>商品名稱</Label>
          <StaticText>{order.details.productName}</StaticText>
        </InfoGrid>
        <InfoGrid>
          <Label>租借期間</Label>
          <StaticText>
            {order.details.rentStamp} ~ {order.details.returnStamp}
          </StaticText>
        </InfoGrid>
        <InfoGrid>
          <Label>租金</Label>
          <StaticText>${order.details.rent}</StaticText>
        </InfoGrid>
        <InfoGrid>
          <Label>押金</Label>
          <StaticText>${order.details.deposit}</StaticText>
        </InfoGrid>
        <InfoGrid>
          <Label>運費</Label>
          <StaticText>${order.details.fee}</StaticText>
        </InfoGrid>
        <InfoGrid>
          <Label>總金額</Label>
          <StaticText>${order.details.finalAmount}</StaticText>
        </InfoGrid>
        <InfoGrid>
          <Label>付款方式</Label>
          <StaticText>{order.details.payment}</StaticText>
        </InfoGrid>
      </Section>

      <Section>
        <SectionTitle>
          <MdPerson size={24} />
          下單用戶
        </SectionTitle>
        <InfoGrid>
          <Label>用戶帳號</Label>
          <StaticText>{order.member.email}</StaticText>
        </InfoGrid>
        <InfoGrid>
          <Label>line ID</Label>
          <StaticText>{order.member.lineId}</StaticText>
        </InfoGrid>
        <InfoGrid>
          <Label>電話</Label>
          <StaticText>{order.member.phone}</StaticText>
        </InfoGrid>
      </Section>

      <Section>
        <SectionTitle>
          <MdLocalShipping size={24} />
          宅配資料
        </SectionTitle>
        <InfoGrid>
          <Label htmlFor="name">姓名</Label>
          <Input
            id="name"
            value={shipping.name}
            onChange={(e) =>
              setShipping((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </InfoGrid>
        <InfoGrid>
          <Label htmlFor="phone">手機</Label>
          <Input
            id="phone"
            value={shipping.phone}
            onChange={(e) =>
              setShipping((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </InfoGrid>
        <InfoGrid>
          <Label htmlFor="email">電子郵件</Label>
          <Input
            id="email"
            type="email"
            value={shipping.email}
            onChange={(e) =>
              setShipping((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </InfoGrid>
        <InfoGrid>
          <Label htmlFor="zipCode">郵遞區號</Label>
          <Input
            id="zipCode"
            value={shipping.addressZIP}
            onChange={(e) =>
              setShipping((prev) => ({ ...prev, zipCode: e.target.value }))
            }
          />
        </InfoGrid>
        <InfoGrid>
          <Label htmlFor="city">縣市</Label>
          <Input
            id="city"
            value={shipping.addressCity}
            onChange={(e) =>
              setShipping((prev) => ({ ...prev, city: e.target.value }))
            }
          />
        </InfoGrid>
        <InfoGrid>
          <Label htmlFor="district">鄉鎮市區</Label>
          <Input
            id="district"
            value={shipping.addressDistrict}
            onChange={(e) =>
              setShipping((prev) => ({ ...prev, district: e.target.value }))
            }
          />
        </InfoGrid>
        <InfoGrid>
          <Label htmlFor="address">詳細地址</Label>
          <Input
            id="address"
            value={shipping.address}
            onChange={(e) =>
              setShipping((prev) => ({ ...prev, address: e.target.value }))
            }
          />
        </InfoGrid>
      </Section>

      <SubmitButton>修改</SubmitButton>

      {showToast && (
        <Toast
          type="success"
          message="成功儲存"
          onClose={() => setShowToast(false)}
        />
      )}
    </FormContainer>
  );
};

export default OrderDetails;
