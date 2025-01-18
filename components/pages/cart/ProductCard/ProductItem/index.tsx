import { FC } from "react";
import {
  Card,
  Header,
  CardContent,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  PriceInfo,
  PriceValue,
  QuantityControl,
  QuantityButton,
  QuantityValue,
  CheckoutNotice,
  HeaderCell,
  ProductRemoveButton,
  Rental,
  RentalGroup,
  RentalLabel,
  RentalSelect,
  RentalDate,
  RentalDateInput,
  RentalSummaryAmount,
  Footer,
  CheckoutButton,
  RentalAction,
  Period,
  SelectArrowIcon,
  Product,
  ProductContent,
  DateInputWrapper,
  DateIcon,
  RentalInputWrapper,
  RentalText,
  Checkout,
  CheckoutActive,
} from "./styled";
import {
  MdAdd,
  MdArrowDropDown,
  MdArrowForward,
  MdRemove,
  MdCalendarToday,
  MdHorizontalRule,
} from "react-icons/md";
import { rentalPeriodOptions, PeriodProps, ProductItemProps } from "../data";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import useFormatCurrency from "@/hooks/useFormatCurrency";

export const ProductItem: FC<ProductItemProps> = ({
  cartId,
  name,
  description,
  quantity,
  rent,
  deposit,
  amount,
  period,
  rentStamp,
  returnStamp,
  imgSrc,
  imgAlt,
  isDatepickerTarget,
  onRentalPeriodChange,
  onStartDateChange,
  onQuantityChange,
  $isActive,
  onClick,
  onDelete,
  isDeleting,
}: ProductItemProps) => {
  const formatCurrency = useFormatCurrency;
  // calculate input date max&min value
  const newDate = new Date();
  const today = newDate.toISOString().split("T")[0];
  const yearDate = new Date(newDate);
  yearDate.setFullYear(yearDate.getFullYear() + 1);
  const oneYearLater = yearDate.toISOString().split("T")[0];

  const handleRentalPeriodChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    onRentalPeriodChange(Number(e.target.value) as PeriodProps);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    onStartDateChange(e.target.value);
  };

  const isMinQuantity = quantity === 1;

  const handleDatePickerToggle = (e: React.MouseEvent<HTMLInputElement>) => {
    if (isDatepickerTarget) {
      e.currentTarget.blur();
      e.preventDefault();
      isDatepickerTarget = false;
    } else {
      // e.currentTarget.focus();
      e.currentTarget.showPicker();
      isDatepickerTarget = true;
    }
  };

  const handleDatePickerBlur = () => {
    isDatepickerTarget = false;
  };

  const handleDecreaseQuantity = () => {
    if (isMinQuantity) return;
    onQuantityChange(-1);
  };

  const isSubmitDisabled = !rentStamp;

  return (
    <Product $isActive={$isActive} onClick={onClick}>
      <Card $isParentActive={$isActive}>
        <Header>
          <HeaderCell>輔具名稱</HeaderCell>
          <HeaderCell>租金/月</HeaderCell>
          <HeaderCell>押金</HeaderCell>
          <HeaderCell>數量</HeaderCell>
        </Header>

        <CardContent>
          <ProductInfo>
            <ProductImage src={imgSrc || "images/device1.png"} alt={imgAlt} />
            <ProductContent>
              <ProductTitle>{name}</ProductTitle>
              <ProductDescription>{description}</ProductDescription>
            </ProductContent>
          </ProductInfo>
          <PriceInfo>
            <PriceValue>{formatCurrency(rent)}</PriceValue>
          </PriceInfo>
          <PriceInfo>
            <PriceValue>{formatCurrency(deposit)}</PriceValue>
          </PriceInfo>
          <QuantityControl>
            <QuantityButton
              type="button"
              onClick={handleDecreaseQuantity}
              disabled={isMinQuantity}
            >
              <MdRemove size={24} />
            </QuantityButton>
            <QuantityValue>{quantity}</QuantityValue>
            <QuantityButton type="button" onClick={() => onQuantityChange(1)}>
              <MdAdd size={24} />
            </QuantityButton>
          </QuantityControl>
        </CardContent>

        <Rental>
          <RentalGroup>
            <RentalAction>
              <RentalLabel>租賃期約</RentalLabel>
              <Period>
                <RentalSelect
                  value={period}
                  onChange={handleRentalPeriodChange}
                >
                  {rentalPeriodOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}天
                    </option>
                  ))}
                </RentalSelect>
                <SelectArrowIcon>
                  <MdArrowDropDown size={24} />
                </SelectArrowIcon>
              </Period>
            </RentalAction>
            <RentalAction>
              <RentalLabel>租賃期間</RentalLabel>
              <DateInputWrapper>
                <RentalDateInput
                  type="date"
                  value={rentStamp}
                  onClick={handleDatePickerToggle}
                  onChange={handleStartDateChange}
                  onBlur={handleDatePickerBlur}
                  min={today}
                  max={oneYearLater}
                />
                <RentalDate>
                  <RentalInputWrapper>
                    <RentalText>{rentStamp || "選擇租借日"}</RentalText>
                    <DateIcon>
                      <MdHorizontalRule size={16} />
                    </DateIcon>
                  </RentalInputWrapper>
                  <RentalInputWrapper>
                    <RentalText>{returnStamp || "計算歸還日"}</RentalText>
                    <DateIcon>
                      <MdCalendarToday size={16} />
                    </DateIcon>
                  </RentalInputWrapper>
                </RentalDate>
              </DateInputWrapper>
            </RentalAction>
          </RentalGroup>
          <RentalSummaryAmount>
            總額(未含運送費)：{formatCurrency(amount)}
          </RentalSummaryAmount>
        </Rental>
        <Footer>
          <ProductRemoveButton
            type="button"
            onClick={() => onDelete(cartId)}
            disabled={isDeleting}
          >
            {isDeleting ? <LoaderSpinner /> : "刪除"}
          </ProductRemoveButton>
          <Checkout>
            <CheckoutNotice>
              注意：一次只能結帳一筆訂單
              <br />
              請先選擇租借日期，再前往結帳
            </CheckoutNotice>
            <CheckoutActive $isDisabled={isSubmitDisabled}>
              <CheckoutButton
                href="/cart/checkout"
                $isDisabled={isSubmitDisabled}
              >
                前往結帳
                <MdArrowForward size={27} />
              </CheckoutButton>
            </CheckoutActive>
          </Checkout>
        </Footer>
      </Card>
    </Product>
  );
};

export default ProductItem;
