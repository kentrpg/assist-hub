import { FC, useState } from "react";
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
  CheckoutNoticeSpan,
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
import { formatCurrency } from "@/helpers/format/currency";
import Loading from "@/components/ui/Loading";
import { productPath } from "@/constants/imagePath";

export const ProductItem: FC<ProductItemProps> = ({
  item,
  isDatepickerTarget,
  onRentalPeriodChange,
  onStartDateChange,
  onQuantityChange,
  $isActive,
  onClick,
  onDelete,
  isDeleting,
}: ProductItemProps) => {
  const { quantity, rent, period, rentStamp } = item;
  const [isLoading, setIsLoading] = useState(false);

  const selectControls = {
    value: period,
    options: rentalPeriodOptions.map((option) => ({
      value: option,
      label: `${option}天`,
    })),
    handleChange: async (e: React.ChangeEvent<HTMLSelectElement>) => {
      setIsLoading(true);
      await onRentalPeriodChange(Number(e.target.value) as PeriodProps);
      setIsLoading(false);
    },
  };

  const dateControls = {
    range: {
      today: new Date().toISOString().split("T")[0],
      oneYearLater: (() => {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        return date.toISOString().split("T")[0];
      })(),
    },
    picker: {
      value: rentStamp,
      handleToggle: (e: React.MouseEvent<HTMLInputElement>) => {
        if (isDatepickerTarget) {
          e.currentTarget.blur();
          e.preventDefault();
          isDatepickerTarget = false;
        } else {
          e.currentTarget.showPicker();
          isDatepickerTarget = true;
        }
      },
      handleBlur: () => {
        isDatepickerTarget = false;
      },
      handleChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) return;
        setIsLoading(true);
        await onStartDateChange(e.target.value);
        setIsLoading(false);
      },
    },
    display: {
      rentDate: rentStamp || "選擇租借日",
      returnDate: item.returnStamp || "計算歸還日",
    },
  };

  const quantityControls = {
    isMinQuantity: quantity === 1,
    handleIncrement: async () => {
      setIsLoading(true);
      await onQuantityChange(1);
      setIsLoading(false);
    },
    handleDecrement: async () => {
      if (quantity <= 1) return;
      setIsLoading(true);
      await onQuantityChange(-1);
      setIsLoading(false);
    },
  };

  const checkoutControls = {
    isDisabled: !rentStamp,
    checkoutUrl: "/cart/checkout",
  };

  const shouldShowDateSelectionReminder = rentStamp === "" && $isActive;

  return (
    <Product $isActive={$isActive} onClick={onClick}>
      <Card $isParentActive={$isActive}>
        {isLoading && <Loading mode="card" />}
        <Header>
          <HeaderCell>輔具名稱</HeaderCell>
          <HeaderCell>租金/月</HeaderCell>
          <HeaderCell>押金</HeaderCell>
          <HeaderCell>數量</HeaderCell>
        </Header>

        <CardContent>
          <ProductInfo>
            <ProductImage
              src={item.imgSrc || `${productPath}/initial-image.webp`}
              alt={item.imgAlt}
            />
            <ProductContent>
              <ProductTitle>{item.name}</ProductTitle>
              <ProductDescription>{item.description}</ProductDescription>
            </ProductContent>
          </ProductInfo>
          <PriceInfo>
            <PriceValue>{formatCurrency(rent)}</PriceValue>
          </PriceInfo>
          <PriceInfo>
            <PriceValue>{formatCurrency(item.deposit)}</PriceValue>
          </PriceInfo>
          <QuantityControl>
            <QuantityButton
              type="button"
              onClick={quantityControls.handleDecrement}
              disabled={quantityControls.isMinQuantity}
            >
              <MdRemove size={24} />
            </QuantityButton>
            <QuantityValue>{quantity}</QuantityValue>
            <QuantityButton
              type="button"
              onClick={quantityControls.handleIncrement}
            >
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
                  value={selectControls.value}
                  onChange={selectControls.handleChange}
                >
                  {selectControls.options.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
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
                  value={dateControls.picker.value}
                  $completed={shouldShowDateSelectionReminder}
                  onClick={dateControls.picker.handleToggle}
                  onChange={dateControls.picker.handleChange}
                  onBlur={dateControls.picker.handleBlur}
                  min={dateControls.range.today}
                  max={dateControls.range.oneYearLater}
                />
                <RentalDate>
                  <RentalInputWrapper>
                    <RentalText>{dateControls.display.rentDate}</RentalText>
                  </RentalInputWrapper>
                  <DateIcon>
                    <MdHorizontalRule size={16} />
                  </DateIcon>
                  <RentalInputWrapper>
                    <RentalText>{dateControls.display.returnDate}</RentalText>
                  </RentalInputWrapper>
                  <DateIcon>
                    <MdCalendarToday size={16} />
                  </DateIcon>
                </RentalDate>
              </DateInputWrapper>
            </RentalAction>
          </RentalGroup>
          <RentalSummaryAmount>
            總額(未含運送費)：{formatCurrency(item.amount)}
          </RentalSummaryAmount>
        </Rental>
        <Footer>
          <ProductRemoveButton
            type="button"
            onClick={() => onDelete(item.cartId)}
            disabled={isDeleting}
          >
            {isDeleting ? <LoaderSpinner /> : "刪除"}
          </ProductRemoveButton>
          <Checkout>
            <CheckoutNotice>
              {shouldShowDateSelectionReminder && (
                <CheckoutNoticeSpan
                  $completed={shouldShowDateSelectionReminder}
                >
                  請先選擇租借日期，再前往結帳
                </CheckoutNoticeSpan>
              )}
              注意：一次只能結帳一筆訂單
            </CheckoutNotice>
            <CheckoutActive $isDisabled={checkoutControls.isDisabled}>
              <CheckoutButton
                href={checkoutControls.checkoutUrl}
                $isDisabled={checkoutControls.isDisabled}
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
