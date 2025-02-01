import { useState, type FormEvent } from "react";
import { quantitySelects, type OrderData } from "./data";
import {
  FormContainer,
  Section,
  SectionTitle,
  Label,
  StaticText,
  Input,
  SubmitButton,
  Field,
  GridRows2,
  TableWrapper,
  Table,
  Th,
  Td,
  UserInfo,
  UserAvatar,
  UserDetails,
  UserName,
  UserEmail,
  CopyButton,
  Thead,
  Tr,
  Tbody,
  CopyGroup,
  TextLabel,
  TextValue,
  TextGroup,
  TextEndGroup,
  Select,
  SelectArrowIcon,
  SelectGroup,
} from "./styled";
import {
  MdPerson,
  MdLocalShipping,
  MdContentCopy,
  MdKeyboardArrowDown,
} from "react-icons/md";
import Toast from "@/components/ui/Toast";
import { Title } from "@/components/ui/titles";
import { formatCurrency } from "@/helpers/format/currency";
import { orderStatusColorMapping, orderStatusValues, shippingStatusColorMapping, shippingValues } from "../OrderList/data";

const OrderDetails = ({ order }: { order: OrderData }) => {
  const [shipping, setShipping] = useState(order.shippinginfo);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submit", shipping);
    setShowToast(true);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>
        訂單編號：{order.orderCode}
      </Title>
        <Section>
          <SectionTitle>訂單狀態</SectionTitle>
          <GridRows2>
            <Field>
              <Label htmlFor="orderStatus">訂單狀態</Label>
              <SelectGroup>
                <Select id="orderStatus" $color={orderStatusColorMapping[order.orderStatus].color || "textMuted"}>
                  {orderStatusValues.map((orderStatus) => (
                    <option key={orderStatus} value={orderStatus}>
                      {orderStatus}
                    </option>
                  ))}
                </Select>
                <SelectArrowIcon>
                  <MdKeyboardArrowDown size={20} />
                </SelectArrowIcon>
              </SelectGroup>
            </Field>
            <Field>
              <Label htmlFor="shippingStatus">物流狀態</Label>
              <SelectGroup>
                <Select id="shippingStatus" $color={shippingStatusColorMapping[order.shippingStatus] || "textMuted"}>
                  {shippingValues.map((shipping) => (
                    <option key={shipping} value={shipping}>
                      {shipping}
                    </option>
                  ))}
                </Select>
                <SelectArrowIcon>
                  <MdKeyboardArrowDown size={20} />
                </SelectArrowIcon>
              </SelectGroup>
            </Field>
          </GridRows2>
        </Section>

        <Section>
          <SectionTitle>
            {/* <MdReceipt size={24} /> */}
            訂單檢視
          </SectionTitle>
          <TextGroup>
            <TextLabel>品名</TextLabel>
            <TextValue>{order.details.productName}</TextValue>
          </TextGroup>
          <GridRows2>
            <Field>
              <Label htmlFor="rentStamp">租借日</Label>
              <Input
                id="rentStamp"
                value={order.details.rentStamp}
                onChange={(e) => setShipping((prev) => ({ ...prev, rentStamp: e.target.value }))}
                placeholder="選擇租借日"
                type="date"
              />
            </Field>
            <Field>
              <Label htmlFor="returnStamp">歸還日</Label>
              <Input
                id="returnStamp"
                value={order.details.returnStamp}
                onChange={(e) => setShipping((prev) => ({ ...prev, returnStamp: e.target.value }))}
                placeholder="選擇歸還日"
                type="date"
              />
            </Field>
          </GridRows2>
          <GridRows2>
            <Field>
              <Label htmlFor="shipping">取貨方式</Label>
              <Input
                id="shipping"
                value={order.shipping}
                onChange={(e) => setShipping((prev) => ({ ...prev, shipping: e.target.value }))}
                placeholder="請選擇取貨方式"
              />
            </Field>
            <Field>
              <Label htmlFor="rent">租金</Label>
              <Input
                id="rent"
                value={order.details.rent}
                onChange={(e) => setShipping((prev) => ({ ...prev, rent: e.target.value }))}
                placeholder="無租金"
              />
            </Field>
          </GridRows2>
          <GridRows2>
            <Field>
              <Label htmlFor="fee">運費</Label>
              <Input
                id="fee"
                value={order.details.fee}
                onChange={(e) => setShipping((prev) => ({ ...prev, fee: e.target.value }))}
                placeholder="無運費"
              />
            </Field>
            <Field>
              <Label htmlFor="deposit">押金</Label>
              <Input
                id="deposit"
                value={order.details.deposit}
                onChange={(e) => setShipping((prev) => ({ ...prev, deposit: e.target.value }))}
                placeholder="無押金"
              />
            </Field>
          </GridRows2>
          <GridRows2>
            <Field>
              <Label htmlFor="payment">付款方式</Label>
              <Input
                id="payment"
                value={order.details.payment}
                onChange={(e) => setShipping((prev) => ({ ...prev, payment: e.target.value }))}
                placeholder="無付款方式"
              />
            </Field>
            <Field>
              <Label htmlFor="quantity">數量</Label>
              <SelectGroup>
                <Select id="quantity" $color="textSecondary">
                  {quantitySelects.map((quantity) => (
                    <option key={quantity} value={quantity}>
                      {quantity}
                    </option>
                  ))}
                </Select>
                <SelectArrowIcon>
                  <MdKeyboardArrowDown size={20} />
                </SelectArrowIcon>
              </SelectGroup>
            </Field>
          </GridRows2>
          <TextEndGroup>
            <TextLabel>總金額</TextLabel>
            <TextValue>{formatCurrency(order.details.finalAmount)}</TextValue>
          </TextEndGroup>
        </Section>

        <Section>
          <SectionTitle>
            {/* <MdPerson size={24} /> */}
            下單用戶
          </SectionTitle>
          <TableWrapper>
            <Table>
              <Thead>
                <Tr>
                  <Th>用戶帳號</Th>
                  <Th>line ID</Th>
                  <Th>電話</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <UserInfo>
                      <UserAvatar>
                        <MdPerson size={20} />
                      </UserAvatar>
                      <UserDetails>
                        <UserName>{order.member.name}</UserName>
                        <UserEmail>{order.member.email}</UserEmail>
                      </UserDetails>
                    </UserInfo>
                  </Td>
                  <Td>
                    <CopyGroup>
                      {order.member.lineId && (
                        <>
                          {order.member.lineId}
                          <CopyButton type="button" onClick={() => navigator.clipboard.writeText(order.member.lineId)}>
                            <MdContentCopy size={16} />
                          </CopyButton>
                        </>
                      )}
                    </CopyGroup>
                  </Td>
                  <Td>{order.member.phone}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableWrapper>
        </Section>

        <Section>
          <SectionTitle>
            <MdLocalShipping size={24} />
            {/* 宅配資料 */}
          </SectionTitle>
          <Field>
            <Label htmlFor="name">姓名</Label>
            <Input
              id="name"
              value={shipping.name}
              onChange={(e) => setShipping((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="請輸入姓名"
            />
          </Field>
          <Field>
            <Label htmlFor="phone">手機</Label>
            <Input
              id="phone"
              value={shipping.phone}
              onChange={(e) => setShipping((prev) => ({ ...prev, phone: e.target.value }))}
              placeholder="請輸入手機號碼"
            />
          </Field>
          <Field>
            <Label htmlFor="email">電子郵件</Label>
            <Input
              id="email"
              type="email"
              value={shipping.email}
              onChange={(e) => setShipping((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="請輸入電子郵件"
            />
          </Field>
          <Field>
            <Label htmlFor="zipCode">郵遞區號</Label>
            <Input
              id="zipCode"
              value={shipping.addressZIP}
              onChange={(e) => setShipping((prev) => ({ ...prev, zipCode: e.target.value }))}
              placeholder="請輸入郵遞區號"
            />
          </Field>
          <GridRows2>
            <Field>
              <Label htmlFor="city">縣市</Label>
              <Input
                id="city"
                value={shipping.addressCity}
                onChange={(e) => setShipping((prev) => ({ ...prev, addressCity: e.target.value }))}
                placeholder="請選擇縣市"
              />
            </Field>
            <Field>
              <Label htmlFor="district">鄉鎮區</Label>
              <Input
                id="district"
                value={shipping.addressDistrict}
                onChange={(e) => setShipping((prev) => ({ ...prev, district: e.target.value }))}
                placeholder="請選擇鄉鎮區"
              />
            </Field>
          </GridRows2>
          <Field>
            <Label htmlFor="address">詳細地址</Label>
            <Input
              id="address"
              value={shipping.address}
              onChange={(e) => setShipping((prev) => ({ ...prev, address: e.target.value }))}
              placeholder="請輸入詳細地址"
            />
          </Field>
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
