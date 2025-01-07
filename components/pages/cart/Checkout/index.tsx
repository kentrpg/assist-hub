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
  CheckboxItem,
  TotalCost,
  CheckoutAction,
  CheckboxList,
  Cost,
  Costs,
  Payment,
  Shipping,
  Term,
  PickupRadio,
  PickupInfo,
  PickupMethod,
  PickupLabel,
  Recipient,
  ProductInfo,
  ProductLabel,
  ProductValue,
  ProductTitle,
  PaymentOptions,
} from "./styled";
import { AccentButton } from "@/components/ui/buttons/Layout";
import CheckboxField from "@/utils/react-hook-form/CheckboxField";
import { CheckoutImage, ImageWrapper } from "@/components/ui/images";
import PaymentOption from "@/components/ui/PaymentOption";
import {
  paymentMethods,
  CheckoutFormData,
  defaultFormValues,
  LabeledValue,
  SummaryProps,
  pickupRadios,
  errorMessages,
  checkboxData,
  storePickupInputFields,
} from "./data";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "@/utils/react-hook-form/InputField";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import RadioField from "@/utils/react-hook-form/RadioField";
import { ErrorMessageField } from "@/utils/react-hook-form/ErrorMessageField";
import { FieldInputLabelMapping } from "@/utils/react-hook-form/InputField/data";
import Address from "./Address";

const Checkout = (props: {
  data: any;
  storeInfoDisplay: LabeledValue[];
  totalCostDisplay: LabeledValue;
  costDisplays: LabeledValue[];
  summaryData: SummaryProps;
}) => {
  const {
    storeInfoDisplay,
    totalCostDisplay: amountData,
    costDisplays: costsData,
    summaryData,
  } = props;

  const methods = useForm<CheckoutFormData>({
    mode: "onChange",
    defaultValues: defaultFormValues,
    criteriaMode: "all",
    reValidateMode: "onChange",
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data: CheckoutFormData) => {
    console.log("Form submitted:", data);
  };

  const renderError = (name: keyof CheckoutFormData) => {
    const config = errorMessages.find((msg) => msg.name === name);
    if (!config) return null;

    return (
      <ErrorMessageField name={name} errors={errors} $margin={config.$margin} />
    );
  };

  return (
    <Container>
      <Breadcrumb />
      <FormProvider {...methods}>
        <OrderForm onSubmit={handleSubmit(onSubmit)} noValidate>
          <Shipping>
            <Title>訂購資訊</Title>
            <PickupMethod>
              <PickupLabel>取貨方式</PickupLabel>
              <PickupRadio>
                {pickupRadios.map((radioProps) => (
                  <RadioField
                    key={radioProps.id}
                    {...radioProps}
                    control={control}
                  >
                    {radioProps.children}
                  </RadioField>
                ))}
              </PickupRadio>
            </PickupMethod>
            {renderError("pickupMethod")}
            <ShippingInfo>
              {watch("pickupMethod") === "store" && (
                <PickupInfo>
                  {storeInfoDisplay.map(({ label, value }) => (
                    <PickupInfoItem key={label}>
                      {label}：{value}
                    </PickupInfoItem>
                  ))}
                </PickupInfo>
              )}
              <Recipient>
                {storePickupInputFields.map((fieldProps) => (
                  <FieldGroup key={fieldProps.name}>
                    <Label htmlFor={fieldProps.name} required>
                      {
                        FieldInputLabelMapping[
                          fieldProps.name as keyof typeof FieldInputLabelMapping
                        ]
                      }
                    </Label>
                    <InputField {...fieldProps} register={register} />
                    {renderError(fieldProps.name as keyof CheckoutFormData)}
                  </FieldGroup>
                ))}
                {watch("pickupMethod") === "delivery" && <Address />}
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
                    name: "paymentMethod",
                    validation: {
                      required: "請選擇付款方式",
                    },
                  }}
                >
                  {icon}
                </PaymentOption>
              ))}
            </PaymentOptions>
            {renderError("paymentMethod")}
          </Payment>

          <Summary>
            <Title>訂單檢視</Title>
            <ProductCard>
              <ImageWrapper>
                <CheckoutImage
                  src={`/images/${summaryData.image.src}`}
                  alt={summaryData.image.alt}
                  width={summaryData.image.width}
                  height={summaryData.image.height}
                />
              </ImageWrapper>
              <ProductInfos>
                <ProductInfo>
                  <ProductTitle>{summaryData.title}</ProductTitle>
                </ProductInfo>
                {summaryData.details.map(({ label, value }) => (
                  <ProductInfo key={label}>
                    <ProductLabel>{label}</ProductLabel>
                    <ProductValue>{value}</ProductValue>
                  </ProductInfo>
                ))}
              </ProductInfos>
            </ProductCard>

            <Costs>
              {costsData.map(({ label, value }: LabeledValue) => (
                <Cost key={label}>
                  <span>{label}</span>
                  <span>{value}</span>
                </Cost>
              ))}
            </Costs>
            <TotalCost>
              <span>{amountData.label}</span>
              <span>{amountData.value}</span>
            </TotalCost>

            <Term>
              <CheckboxList>
                {checkboxData.map((checkboxProps) => (
                  <CheckboxItem key={checkboxProps.id}>
                    <CheckboxField {...checkboxProps} control={control}>
                      {checkboxProps.children}
                    </CheckboxField>
                    {renderError(checkboxProps.field.name)}
                  </CheckboxItem>
                ))}
              </CheckboxList>
              <CheckoutAction>
                <AccentButton
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length !== 0}
                >
                  {isSubmitting ? <LoaderSpinner /> : "送出訂單"}
                </AccentButton>
              </CheckoutAction>
            </Term>
          </Summary>
        </OrderForm>
      </FormProvider>
    </Container>
  );
};

export default Checkout;
