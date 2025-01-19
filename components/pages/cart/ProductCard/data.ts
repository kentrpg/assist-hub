export type PeriodProps = 30 | 60 | 90 | 180;
export type PeriodPropsString = "30" | "60" | "90" | "180";
export const rentalPeriodOptions: PeriodProps[] = [30, 60, 90, 180];

export type CartItem = {
  cartId: number;
  name: string;
  description: string;
  quantity: number;
  rent: number;
  deposit: number;
  fee: number;
  amount: number;
  period: PeriodProps;
  rentDate: string;
  rentStamp: string;
  returnDate: string;
  returnStamp: string;
  imgSrc: string;
  imgAlt: string;
};

export type ProductItemProps = {
  item: CartItem;
  isDatepickerTarget: boolean;
  $isActive: boolean;
  isDeleting: boolean;
  onClick: () => void;
  onDelete: (id: number) => void;
  onRentalPeriodChange: (period: PeriodProps) => void;
  onStartDateChange: (date: string) => void;
  onQuantityChange: (quantity: number) => void;
};