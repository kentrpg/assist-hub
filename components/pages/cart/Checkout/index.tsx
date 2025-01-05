import Breadcrumb from "@/components/ui/Breadcrumb";
import { Container1164 as Container } from "@/styles/container";
import {
  FormGrid,
  FieldGroup,
  Input,
  Label,
  OrderForm,
  Summary,
  ProductCard,
  ProductInfos,
  Title,
  StoreInfo,
  PickupInfoItem,
  CheckboxItem,
  TotalCost,
  CheckoutAction,
  CheckboxList,
  Cost,
  Costs,
  Payment,
  Shipping,
  Term,
  PickupCheckbox,
  PickupInfo,
  PickupMethod,
  PickupMethodLabel,
  Recipient,
  ProductInfo,
  ProductLabel,
  ProductValue,
  ProductTitle,
  PaymentOptions,
} from "./styled";
import { AccentButton } from "@/components/ui/buttons";
import Checkbox from "@/components/ui/Checkbox";
import { InfoLink } from "@/utils/link";
import { CheckoutImage, ImageWrapper } from "@/components/ui/images";
import PaymentOption from "@/components/ui/PaymentOption";
import {
  paymentMethods,
  defaultPayment,
  PickupMethodValue,
  CheckoutState,
  initialCheckoutState,
  RecipientInfo,
  storeInfoDisplay,
  summaryDisplay,
  costsDisplay,
  totalCost,
} from "./data";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
} from "react-icons/md";
import { useState } from "react";

const Checkout = () => {
  const [checkoutState, setCheckoutState] = useState<CheckoutState>(
    initialCheckoutState
  );

  const handleRecipientChange = (field: keyof RecipientInfo, value: string) => {
    setCheckoutState((prev) => ({
      ...prev,
      recipientInfo: {
        ...prev.recipientInfo,
        [field]: value,
      },
    }));
  };

  const updateCheckoutState = (
    field: keyof CheckoutState,
    value: boolean | PickupMethodValue
  ) => {
    if (
      field === "selectedPickupMethod" &&
      value === checkoutState.selectedPickupMethod
    )
      return;

    setCheckoutState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePickupMethodChange = (value: PickupMethodValue) => {
    updateCheckoutState("selectedPickupMethod", value);
  };

  const handleRulesChange = (value: boolean) => {
    updateCheckoutState("agreeRentalRules", value);
  };

  const handlePrivacyChange = (value: boolean) => {
    updateCheckoutState("agreeTermsPrivacy", value);
  };

  const handlePaymentChange = (value: string) => {
    // 只在需要處理付款方式變更時的邏輯
    console.log("Selected payment:", value);
  };

  return (
    <Container>
      <Breadcrumb />
      <OrderForm>
        <Shipping>
          <Title>訂購資訊</Title>
          <FormGrid>
            <StoreInfo>
              <PickupMethod>
                <PickupMethodLabel>取貨方式</PickupMethodLabel>
                <PickupCheckbox>
                  <CheckboxItem>
                    <Checkbox
                      id="store"
                      $gap={12}
                      name="pickupMethod"
                      value="store"
                      type="radio"
                      defaultChecked={
                        checkoutState.selectedPickupMethod === "store"
                      }
                      onChange={handlePickupMethodChange}
                      $selectedIcon={MdRadioButtonChecked}
                      $defaultIcon={MdRadioButtonUnchecked}
                      $checkedIconColor="primary"
                      $uncheckedIconColor="primary"
                      $labelColor="textSecondary"
                    >
                      店取
                    </Checkbox>
                  </CheckboxItem>
                  <CheckboxItem>
                    <Checkbox
                      id="delivery"
                      $gap={12}
                      name="pickupMethod"
                      value="delivery"
                      type="radio"
                      defaultChecked={
                        checkoutState.selectedPickupMethod === "delivery"
                      }
                      onChange={handlePickupMethodChange}
                      $selectedIcon={MdRadioButtonChecked}
                      $defaultIcon={MdRadioButtonUnchecked}
                      $checkedIconColor="primary"
                      $uncheckedIconColor="primary"
                      $labelColor="textSecondary"
                    >
                      宅配
                    </Checkbox>
                  </CheckboxItem>
                </PickupCheckbox>
              </PickupMethod>
              <PickupInfo>
                {storeInfoDisplay.map(({ label, value }) => (
                  <PickupInfoItem key={label}>
                    {label}：{value}
                  </PickupInfoItem>
                ))}
              </PickupInfo>
            </StoreInfo>

            <Recipient>
              <FieldGroup>
                <Label htmlFor="name" required>
                  姓名
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="王小姐"
                  value={checkoutState.recipientInfo.name}
                  onChange={(e) =>
                    handleRecipientChange("name", e.target.value)
                  }
                />
              </FieldGroup>
              <FieldGroup>
                <Label htmlFor="phone" required>
                  手機
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0912345678"
                  value={checkoutState.recipientInfo.phone}
                  onChange={(e) =>
                    handleRecipientChange("phone", e.target.value)
                  }
                />
              </FieldGroup>
              <FieldGroup>
                <Label htmlFor="email" required>
                  電子郵件
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="A12345678@gmail.com"
                  value={checkoutState.recipientInfo.email}
                  onChange={(e) =>
                    handleRecipientChange("email", e.target.value)
                  }
                />
              </FieldGroup>
            </Recipient>
          </FormGrid>
        </Shipping>
        <Payment>
          <Title>付款方式</Title>
          <PaymentOptions>
            {paymentMethods.map(({ id, value, icon }) => (
              <PaymentOption
                key={id}
                id={id}
                name="payment"
                value={value}
                defaultChecked={value === defaultPayment}
                onChange={handlePaymentChange}
              >
                {icon}
              </PaymentOption>
            ))}
          </PaymentOptions>
        </Payment>
        <Summary>
          <Title>訂單檢視</Title>
          <ProductCard>
            <ImageWrapper>
              <CheckoutImage
                src={summaryDisplay.image.src}
                alt={summaryDisplay.image.alt}
                width={summaryDisplay.image.width}
                height={summaryDisplay.image.height}
              />
            </ImageWrapper>
            <ProductInfos>
              <ProductInfo>
                <ProductTitle>{summaryDisplay.title}</ProductTitle>
              </ProductInfo>
              {summaryDisplay.details.map(({ label, value }) => (
                <ProductInfo key={label}>
                  <ProductLabel>{label}</ProductLabel>
                  <ProductValue>{value}</ProductValue>
                </ProductInfo>
              ))}
            </ProductInfos>
          </ProductCard>

          <Costs>
            {costsDisplay.map(({ label, value }) => (
              <Cost key={label}>
                <span>{label}</span>
                <span>{value}</span>
              </Cost>
            ))}
          </Costs>
          <TotalCost>
            <span>{totalCost.label}</span>
            <span>{totalCost.value}</span>
          </TotalCost>

          <Term>
            <CheckboxList>
              <CheckboxItem>
                <Checkbox
                  id="agreeRentalRules"
                  $gap={10}
                  type="checkbox"
                  defaultChecked={checkoutState.agreeRentalRules}
                  onChange={handleRulesChange}
                  $selectedIcon={MdCheckBox}
                  $defaultIcon={MdCheckBoxOutlineBlank}
                  $checkedIconColor="primary"
                  $uncheckedIconColor="primary"
                  $labelColor="textSecondary"
                  required
                >
                  我已閱讀並同意此網站之
                  <InfoLink href="#">租賃輪具規則</InfoLink>
                </Checkbox>
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  id="agreeTermsPrivacy"
                  $gap={10}
                  type="checkbox"
                  defaultChecked={checkoutState.agreeTermsPrivacy}
                  onChange={handlePrivacyChange}
                  $selectedIcon={MdCheckBox}
                  $defaultIcon={MdCheckBoxOutlineBlank}
                  $checkedIconColor="primary"
                  $uncheckedIconColor="primary"
                  $labelColor="textSecondary"
                  required
                >
                  我同意網站<InfoLink href="#">服務條款</InfoLink>及
                  <InfoLink href="#">隱私權政策</InfoLink>
                </Checkbox>
              </CheckboxItem>
            </CheckboxList>
            <CheckoutAction>
              <AccentButton>送出訂單</AccentButton>
            </CheckoutAction>
          </Term>
        </Summary>
      </OrderForm>
    </Container>
  );
};

export default Checkout;
