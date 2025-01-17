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
import { useForm, FormProvider } from "react-hook-form";
import InputField from "@/utils/react-hook-form/InputField";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import RadioField from "@/utils/react-hook-form/RadioField";
import {
  FieldInputLabelMapping,
  FormValuesProps,
} from "@/utils/react-hook-form/InputField/data";
import Address from "./Address";
import useRenderError from "@/hooks/useRenderError";
import { checkoutSlice } from "./cartSlice";
import { userSlice } from "./userSlice";
import useDateFormatter from "@/hooks/useDateFormatter";
import LinePayImage from "./LinePayImage";
import useFormatCurrency from "@/hooks/useFormatCurrency";
import { useState } from "react";
import { useRouter } from "next/router";

const Checkout = () => {
  const [isOrderSubmitting, setIsOrderSubmitting] = useState(false);
  const cart = checkoutSlice;
  const user = userSlice;
  const router = useRouter();

  const formatCurrency = useFormatCurrency;
  const contractDate = `${useDateFormatter(
    cart.rentStamp
  )} - ${useDateFormatter(cart.returnStamp)}`;

  const methods = useForm<FormValuesProps["checkout"]>({
    mode: "onChange",
    defaultValues: {
      ...defaultFormValues,
      name: user.name,
      phone: user.phone,
      email: user.email,
      addressZIP: user.addressZIP,
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
        id: 20,
        name: "鋁製躺式輪椅",
        imgSrc: "圖片路徑",
        imgAlt: "",
        quantity: 2,
        rentStamp: "2011-10-10T14:48:00",
        returnStamp: "2011-10-10T14:48:00",
        period: 2,
        rent: 3000,
        deposit: 500,
        fee: 0,
        finalAmount: 3500,
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
          // addressDistrict: data.addressDistrict,
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
    console.log("response", res, result);
    // TBD: result.statusCode === 200 包成 help function
    // result.status 包成 help function
    const isSuccess = result.statusCode === 200 && result.status;

    // TBD: Object.is(result.error, null) 包成 help function
    if (Object.is(result.error, null)) {
      isSuccess && router.push(`${router.asPath}/approval`);
      router.push(`${router.asPath}/declined`);
    } else {
      console.error("Error:", result.error);
    }

    // 把 error 當作防呆，如果 error 有值，則 return 回去
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
      {/* <FormProvider {...methods}> */}
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
                <ProductInfo>{contractDate}</ProductInfo>
              </ProductInfos>
            </ProductCard>

            <Costs>
              <Cost>
                <span>租金</span>
                <span>{formatCurrency(cart.rent)}</span>
              </Cost>
              <Cost>
                <span>押金</span>
                <span>{formatCurrency(cart.deposit)}</span>
              </Cost>
              <Cost>
                <span>運費</span>
                <span>{formatCurrency(cart.fee)}</span>
              </Cost>
            </Costs>
            <TotalCost>
              <span>總計</span>
              <span>{formatCurrency(cart.finalAmount)}</span>
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
      {/* </FormProvider> */}
    </Container>
  );
};

export default Checkout;
