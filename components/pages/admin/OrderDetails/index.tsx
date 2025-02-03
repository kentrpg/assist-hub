import { useState } from "react";
import { OrderDetailsInputs, paymentSelects, paymentStatusMapping, PaymentType, quantitySelects, QuantityType, shippingSelects, shippingStatusMapping, ShippingType, type OrderData } from "./data";
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
  MdContentCopy,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { Title } from "@/components/ui/titles";
import { formatCurrency } from "@/helpers/format/currency";
import { orderStatusValues, shippingValues } from "../OrderList/data";
import { useForm } from "react-hook-form";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import { FormError } from "@/utils/react-hook-form/FormError";
import { useRouter } from "next/router";
import { hasError, isValid } from "@/helpers/api/status";
import { useToast } from "@/components/ui/Toast";

const OrderDetails = ({ order }: { order: OrderData }) => {
  console.log(order);
  const router = useRouter();
  const { openToast, Toast } = useToast();
  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, dirtyFields, isDirty, isSubmitting },
  } = useForm<OrderDetailsInputs>({
    mode: "onChange",
    defaultValues: {
      orderStatus: order.orderStatus || "",
      shippingStatus: order.shippingStatus || "",
      rentStamp: order.details.rentStamp || "",
      returnStamp: order.details.returnStamp || "",
      shipping: order.shipping || "",
      rent: order.details.rent || 0,
      fee: order.details.fee || 0,
      deposit: order.details.deposit || 0,
      payment: order.details.payment || "",
      quantity: order.details.quantity || "",
      name: order.shippinginfo.name || "",
      phone: order.shippinginfo.phone || "",
      email: order.shippinginfo.email || "",
      addressZIP: order.shippinginfo.addressZIP || "",
      addressCity: order.shippinginfo.addressCity || "",
      addressDistrict: order.shippinginfo.addressDistrict || "",
      addressDetail: order.shippinginfo.AddressDetail || "",
    }
  });

  const watchedValues = watch(["quantity", "rent", "deposit", "fee", "shipping"]);
  
  const finalAmount = (
    Number(watchedValues[0] || 0) * Number(watchedValues[1] || 0) + 
    Number(watchedValues[2] || 0) + 
    Number(watchedValues[3] || 0)
  );

  const onSubmit = async (data: OrderDetailsInputs) => {
    const submitData = {
      memberId: order.member.memberId,
      orderCode: order.orderCode,
      orderStatus: data.orderStatus,
      shippingStatus: data.shippingStatus,
      shipping: data.shipping,
      shippingInfo: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        addressZIP: data.addressZIP,
        addressCity: data.addressCity,
        addressDistrict: data.addressDistrict,
        addressDetail: data.addressDetail,
      },
      details: {
        quantity: data.quantity,
        productName: order.details.productName,
        rent: data.rent,
        deposit: data.deposit,
        fee: data.fee,
        finalAmount: finalAmount,
        rentStamp: data.rentStamp,
        returnStamp: data.returnStamp,
        payment: data.payment,
      }
    };

    const orderId = router.query.id as string;

    const result = await fetch(`/api/admin/putOrder?id=${orderId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    });

    const json = await result.json();

    if (hasError(json)) {
      openToast("系統錯誤，請稍後再試", "error");
      return;
    }

    openToast(isValid(json) ? "成功儲存" : "儲存失敗", isValid(json) ? "success" : "error");
    
    isValid(json) && reset(data);
  };

  const getValidationRules = (fieldValue: any, errorMessage: string, extraRules = {}) => {
    return fieldValue ? { required: errorMessage, ...extraRules } : extraRules;
  };

  const formControls = {
    amount: {
      value: isDirty ? finalAmount : order.details.finalAmount,
      format: (value: number) => formatCurrency(value),
    },
    submit: {
      isDisabled: isSubmitting || Object.keys(errors).length !== 0 || !isDirty,
      text: (() => {
        if (isSubmitting) return null;
        return isDirty ? "儲存" : "尚未修改";
      })(),
      isLoading: isSubmitting,
    },
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <Title>
        訂單編號：{order.orderCode}
      </Title>
        <Section>
          <SectionTitle>訂單狀態</SectionTitle>
          <GridRows2>
            <Field>
              <Label htmlFor="orderStatus">訂單狀態</Label>
              <SelectGroup>
                <Select 
                  id="orderStatus" 
                  {...register("orderStatus", getValidationRules(order.orderStatus, "請選擇訂單狀態"))}
                >
                  {orderStatusValues.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </Select>
                <SelectArrowIcon>
                  <MdKeyboardArrowDown size={20} />
                </SelectArrowIcon>
              </SelectGroup>
              <FormError
                $margin="4px"
                name="orderStatus"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請選擇訂單狀態"
                }}
              />
            </Field>
            <Field>
              <Label htmlFor="shippingStatus">物流狀態</Label>
              <SelectGroup>
                <Select 
                  id="shippingStatus" 
                  {...register("shippingStatus", getValidationRules(order.shippingStatus, "請選擇物流狀態"))}
                >
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
              <FormError
                $margin="4px"
                name="shippingStatus"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請選擇物流狀態"
                }}
              />
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
                {...register("rentStamp", getValidationRules(order.details.rentStamp, "請選擇租借日"))}
                placeholder="選擇租借日"
                type="date"
              />
              <FormError
                $margin="4px"
                name="rentStamp"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請選擇租借日"
                }}
              />
            </Field>
            <Field>
              <Label htmlFor="returnStamp">歸還日</Label>
              <Input
                id="returnStamp"
                {...register("returnStamp", getValidationRules(order.details.returnStamp, "請選擇歸還日"))}
                placeholder="選擇歸還日"
                type="date"
              />
              <FormError
                $margin="4px"
                name="returnStamp"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請選擇歸還日"
                }}
              />
            </Field>
          </GridRows2>
          <GridRows2>
            <Field>
              <Label htmlFor="shipping">取貨方式</Label>
              <SelectGroup>
                <Select 
                  id="shipping" 
                  {...register("shipping", getValidationRules(order.shipping, "請選擇取貨方式"))}
                >
                  {shippingSelects.map((shipping) => (
                    <option key={shipping} value={shipping}>
                      {shippingStatusMapping[shipping]}
                    </option>
                  ))}
                </Select>
                <SelectArrowIcon>
                  <MdKeyboardArrowDown size={20} />
                </SelectArrowIcon>
              </SelectGroup>
              <FormError
                $margin="4px"
                name="shipping"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請選擇取貨方式"
                }}
              />
            </Field>
            <Field>
              <Label htmlFor="rent">租金</Label>
              <Input
                id="rent"
                type="number"
                {...register("rent", getValidationRules(order.details.rent, "請輸入租金"))}
                placeholder="無租金"
              />
              <FormError
                $margin="4px"
                name="rent"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請輸入租金"
                }}
              />
            </Field>
          </GridRows2>
          <GridRows2>
            <Field>
              <Label htmlFor="fee">運費</Label>
              <Input
                id="fee"
                type="number"
                {...register("fee", getValidationRules(order.details.fee, "請輸入運費"))}
                placeholder="無運費"
              />
              <FormError
                $margin="4px"
                name="fee"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請輸入運費"
                }}
              />
            </Field>
            <Field>
              <Label htmlFor="deposit">押金</Label>
              <Input
                id="deposit"
                type="number"
                {...register("deposit", getValidationRules(order.details.deposit, "請輸入押金"))}
                placeholder="無押金"
              />
              <FormError
                $margin="4px"
                name="deposit"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請輸入押金"
                }}
              />
            </Field>
          </GridRows2>
          <GridRows2>
            <Field>
              <Label htmlFor="payment">付款方式</Label>
              <SelectGroup>
                <Select 
                  id="payment" 
                  {...register("payment", getValidationRules(order.details.payment, "請選擇付款方式"))}
                >
                  {paymentSelects.map((payment) => (
                    <option key={payment} value={payment}>
                      {paymentStatusMapping[payment]}
                    </option>
                  ))}
                </Select>
                <SelectArrowIcon>
                  <MdKeyboardArrowDown size={20} />
                </SelectArrowIcon>
              </SelectGroup>
              <FormError
                $margin="4px"
                name="payment"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請選擇付款方式"
                }}
              />
            </Field>
            <Field>
              <Label htmlFor="quantity">數量</Label>
              <SelectGroup>
                <Select 
                  id="quantity" 
                  {...register("quantity", getValidationRules(order.details.quantity, "請選擇數量"))}
                >
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
              <FormError
                $margin="4px"
                name="quantity"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請選擇數量"
                }}
              />
            </Field>
          </GridRows2>
          <TextEndGroup>
            <TextLabel>總金額</TextLabel>
            <TextValue>
              {formControls.amount.format(formControls.amount.value)}
            </TextValue>
          </TextEndGroup>
        </Section>

        <Section>
          <SectionTitle>
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
            {watchedValues[4].toString() === "delivery" ? "宅配資料" : "店內取貨資料"}
          </SectionTitle>
          <Field>
            <Label htmlFor="name">姓名</Label>
            <Input
              id="name"
              {...register("name", getValidationRules(order.shippinginfo.name, "請輸入姓名"))}
              placeholder="請輸入姓名"
            />
            <FormError
              $margin="4px"
              name="name"
              errorType="default"
              errors={errors}
              dirtyFields={dirtyFields}
              validation={{
                required: "請輸入姓名"
              }}
            />
          </Field>
          <Field>
            <Label htmlFor="phone">手機</Label>
            <Input
              id="phone"
              {...register("phone", getValidationRules(order.shippinginfo.phone, "請輸入手機號碼", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "請輸入有效的手機號碼"
                }
              }))}
              placeholder="請輸入手機號碼"
            />
            <FormError
              $margin="4px"
              name="phone"
              errorType="default"
              errors={errors}
              dirtyFields={dirtyFields}
              validation={{
                required: "請輸入手機號碼"
              }}
            />
          </Field>
          <Field>
            <Label htmlFor="email">電子郵件</Label>
            <Input
              id="email"
              {...register("email", getValidationRules(
                order.shippinginfo.email, 
                "請輸入電子郵件",
                {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "請輸入有效的電子郵件"
                  }
                }
              ))}
              placeholder="請輸入電子郵件"
            />
            <FormError
              $margin="4px"
              name="email"
              errorType="default"
              errors={errors}
              dirtyFields={dirtyFields}
              validation={{
                required: "請輸入電子郵件"
              }}
            />
          </Field>
          <Field>
            <Label htmlFor="addressZIP">郵遞區號</Label>
            <Input
              id="addressZIP"
              {...register("addressZIP", getValidationRules(order.shippinginfo.addressZIP, "請輸入郵遞區號"))}
              placeholder="請輸入郵遞區號"
            />
            <FormError
              $margin="4px"
              name="addressZIP"
              errorType="default"
              errors={errors}
              dirtyFields={dirtyFields}
              validation={{
                required: "請輸入郵遞區號"
              }}
            />
          </Field>
          <GridRows2>
            <Field>
              <Label htmlFor="addressCity">縣市</Label>
              <Input
                id="addressCity"
                {...register("addressCity", getValidationRules(order.shippinginfo.addressCity, "請選擇縣市"))}
                placeholder="請選擇縣市"
              />
              <FormError
                $margin="4px"
                name="addressCity"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請選擇縣市"
                }}
              />
            </Field>
            <Field>
              <Label htmlFor="addressDistrict">鄉鎮區</Label>
              <Input
                id="addressDistrict"
                {...register("addressDistrict", getValidationRules(order.shippinginfo.addressDistrict, "請選擇鄉鎮區"))}
                placeholder="請選擇鄉鎮區"
              />
              <FormError
                $margin="4px"
                name="addressDistrict"
                errorType="default"
                errors={errors}
                dirtyFields={dirtyFields}
                validation={{
                  required: "請選擇鄉鎮區"
                }}
              />
            </Field>
          </GridRows2>
          <Field>
            <Label htmlFor="addressDetail">詳細地址</Label>
            <Input
              id="addressDetail"
              {...register("addressDetail", getValidationRules(order.shippinginfo.AddressDetail, "請輸入詳細地址"))}
              placeholder="請輸入詳細地址"
            />
            <FormError
              $margin="4px"
              name="addressDetail"
              errorType="default"
              errors={errors}
              dirtyFields={dirtyFields}
              validation={{
                required: "請輸入詳細地址"
              }}
            />
          </Field>
        </Section>

        <SubmitButton 
          type="submit"
          disabled={formControls.submit.isDisabled}
        >
          {formControls.submit.isLoading ? (
            <LoaderSpinner $color="grey100" />
          ) : (
            formControls.submit.text
          )}
        </SubmitButton>
      <Toast />
    </FormContainer>
  );
};

export default OrderDetails;
