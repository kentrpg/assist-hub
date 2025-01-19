import Breadcrumb from "@/components/ui/Breadcrumb";
import { Container1164 as Container } from "@/styles/container";
import {
  ShippingInfo,
  FieldGroup,
  Label,
  OrderForm,
  Summary,
  ProductCard,
  ProductInfos,
  Title,
  PickupInfoItem,
  Checkbox,
  TotalCost,
  Cost,
  Costs,
  Payment,
  Shipping,
  Agreement,
  PickupRadio,
  PickupInfo,
  PickupMethod,
  PickupLabel,
  Recipient,
  ProductInfo,
  ProductTitle,
  PaymentOptions,
  PickupGroup,
  SummaryContent,
} from "./styled";
import { AccentButton as SubmitButton } from "@/components/ui/buttons/Layout";
import CheckboxField from "@/utils/react-hook-form/CheckboxField";
import { CheckoutImage, ImageWrapper } from "@/components/ui/images";
import PaymentOption from "@/components/ui/PaymentOption";
import {
  store,
  paymentMethods,
  defaultFormValues,
  pickupRadios,
  errorMessages,
  agreementInfo,
  storePickupInputFields,
} from "./data";
import { useForm } from "react-hook-form";
import InputField from "@/utils/react-hook-form/InputField";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import RadioField from "@/utils/react-hook-form/RadioField";
import {
  FieldInputLabelMapping,
  FormValuesProps,
} from "@/utils/react-hook-form/InputField/data";
import Address from "./Address";
import useRenderError from "@/hooks/useRenderError";
import useDateFormatter from "@/hooks/useDateFormatter";
import LinePayImage from "./LinePayImage";
import useFormatCurrency from "@/hooks/useFormatCurrency";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectActiveCartItem } from "@/utils/redux/slices/cart";
import { Loading } from "@/components/ui/Loading";
import { RootState } from "@/utils/redux/store";

const Checkout = () => {
  const router = useRouter();
  const cart = useSelector(selectActiveCartItem);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!cart) {
      router.push("/cart");
    }
  }, [cart, router]);

  if (!cart || !user) {
    return <Loading />;
  }

  const [isOrderSubmitting, setIsOrderSubmitting] = useState(false);

  const formatCurrency = useFormatCurrency;

  const orderControls = {
    finalAmount: cart.fee + cart.amount,
    contractDate: `${useDateFormatter(cart.rentStamp)} - ${useDateFormatter(
      cart.returnStamp
    )}`,
    formatAmount: (value: number) => formatCurrency(value),
  };

  const methods = useForm<FormValuesProps["checkout"]>({
    mode: "onChange",
    defaultValues: {
      ...defaultFormValues,
      name: user.name,
      phone: user.phone,
      email: user.email,
      addressZIP: user.addressZip,
      addressCity: user.addressCity,
      addressDistrict: user.addressDistrict,
      addressDetail: user.addressDetail,
    },
    criteriaMode: "all",
    reValidateMode: "onChange",
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors, isSubmitting },
  } = methods;

  const { renderError } = useRenderError({
    errors,
    errorMessages,
  });

  const onSubmit = async (data: FormValuesProps["checkout"]) => {
    console.log("Form submitted:", data);
    setIsOrderSubmitting(true);

    const checkoutData = {
      product: {
        id: cart.cartId,
        name: cart.name,
        imgSrc: cart.imgSrc,
        imgAlt: cart.imgAlt,
        quantity: cart.quantity,
        rentStamp: cart.rentStamp,
        returnStamp: cart.returnStamp,
        period: cart.period,
        rent: cart.rent,
        deposit: cart.deposit,
        fee: cart.fee,
        finalAmount: orderControls.finalAmount,
      },
      payment: data.payment,
      shipping: {
        method: data.method,
        data: {
          userName: data.name,
          phone: data.phone,
          email: data.email,
          addressZIP: data.addressZIP,
          addressCity: data.addressCity,
          addressDistinct: data.addressDistrict,
          // TBD: 後續 API 有更新錯誤在改回來 addressDistrict: data.addressDistrict,
          addressDetail: data.addressDetail,
        },
      },
    };

    const res = await fetch("/api/postOrder", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkoutData),
    });

    const result = await res.json();
    // TBD: result.statusCode === 200 包成 help function
    // result.status 包成 help function
    // const isSuccess = result.statusCode === 200 && result.status;

    if (result.error) {
      console.error("Error:", result.error);
      setIsOrderSubmitting(false);
      return;
    }

    if (data.payment === "Remit") {
      router.push("/user/order");
      setIsOrderSubmitting(false);
      return;
    }

    const isSuccess = result.statusCode === 200 && result.status;
    const redirectPath = isSuccess
      ? `${router.asPath}/approval`
      : `${router.asPath}/declined`;

    router.push(redirectPath);
    setIsOrderSubmitting(false);
  };

  const handleMethodChange = (value: string) => {
    console.log("Method changed:", value);
    if (value === "store") {
      clearErrors([
        "addressZIP",
        "addressCity",
        "addressDistrict",
        "addressDetail",
      ]);
    }
  };

  return (
    <Container>
      <Breadcrumb />
      <OrderForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <Shipping>
          <Title>訂購資訊</Title>
          <ShippingInfo>
            <PickupMethod>
              <PickupGroup>
                <PickupLabel>取貨方式</PickupLabel>
                <PickupRadio>
                  {pickupRadios.map((radioProps) => (
                    <RadioField<"checkout">
                      key={radioProps.id}
                      {...radioProps}
                      control={control}
                      onChange={handleMethodChange}
                    >
                      {radioProps.label}
                    </RadioField>
                  ))}
                </PickupRadio>
              </PickupGroup>
              {renderError("method")}
            </PickupMethod>
            {watch("method") === "store" && (
              <PickupInfo>
                <PickupInfoItem>店家電話：{store.phone}</PickupInfoItem>
                <PickupInfoItem>營業時間：{store.businessHours}</PickupInfoItem>
                <PickupInfoItem>地址：{store.address}</PickupInfoItem>
              </PickupInfo>
            )}
            <Recipient>
              {storePickupInputFields.map((fieldData) => (
                <FieldGroup key={fieldData.id}>
                  <Label htmlFor={fieldData.id} required>
                    {FieldInputLabelMapping[fieldData.name]}
                  </Label>
                  <InputField<"checkout">
                    {...fieldData}
                    variant="checkout"
                    register={register}
                  />
                  {renderError(fieldData.name)}
                </FieldGroup>
              ))}
              {watch("method") === "delivery" && (
                <Address register={register} errors={errors} />
              )}
            </Recipient>
          </ShippingInfo>
        </Shipping>

        <Payment>
          <Title>付款方式</Title>
          <PaymentOptions>
            {paymentMethods.map(({ id, value, icon }) => (
              <PaymentOption
                key={id}
                value={value}
                register={register}
                field={{
                  name: "payment",
                  validation: {
                    required: "請選擇付款方式",
                  },
                }}
              >
                {icon === "LinePay" ? <LinePayImage /> : icon}
              </PaymentOption>
            ))}
          </PaymentOptions>
          {renderError("payment")}
        </Payment>

        <Summary>
          <Title>訂單檢視</Title>
          <SummaryContent>
            <ProductCard>
              <ImageWrapper>
                <CheckoutImage
                  src={cart.imgSrc}
                  alt={cart.imgAlt}
                  width="80"
                  height="80"
                />
              </ImageWrapper>
              <ProductInfos>
                <ProductTitle>{cart.name}</ProductTitle>
                <ProductInfo>x{cart.quantity}</ProductInfo>
                <ProductInfo>{cart.period} 天</ProductInfo>
                <ProductInfo>{orderControls.contractDate}</ProductInfo>
              </ProductInfos>
            </ProductCard>

            <Costs>
              <Cost>
                <span>租金</span>
                <span>{orderControls.formatAmount(cart.rent)}</span>
              </Cost>
              <Cost>
                <span>押金</span>
                <span>{orderControls.formatAmount(cart.deposit)}</span>
              </Cost>
              <Cost>
                <span>運費</span>
                <span>{orderControls.formatAmount(cart.fee)}</span>
              </Cost>
            </Costs>
            <TotalCost>
              <span>總計</span>
              <span>
                {orderControls.formatAmount(orderControls.finalAmount)}
              </span>
            </TotalCost>
            <Agreement>
              {agreementInfo.map((checkboxProps) => (
                <Checkbox key={checkboxProps.id}>
                  <CheckboxField<FormValuesProps["checkout"]>
                    {...checkboxProps}
                    control={control}
                  />
                  {renderError(checkboxProps.field.name)}
                </Checkbox>
              ))}
            </Agreement>
          </SummaryContent>
          <SubmitButton
            type="submit"
            disabled={isSubmitting || Object.keys(errors).length !== 0}
          >
            {isOrderSubmitting ? <LoaderSpinner /> : "送出訂單"}
          </SubmitButton>
        </Summary>
      </OrderForm>
    </Container>
  );
};

export default Checkout;
