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
  onDelete: (id: number) => Promise<void>;
  onRentalPeriodChange: (period: PeriodProps) => Promise<void>;
  onStartDateChange: (date: string) => Promise<void>;
  onQuantityChange: (quantity: number) => Promise<void>;
};