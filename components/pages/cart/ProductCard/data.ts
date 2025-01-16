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
  amount: number;
  period: PeriodProps;
  rentStamp: string;
  returnStamp: string;
  imgSrc: string;
  imgAlt: string;
};

export type CartResponse = {
  status: number;
  message: string;
  data: CartItem[];
};

export type EnhancedCartItem = CartItem & {
  isDatepickerTarget: boolean;
};

export type ProductItemProps = EnhancedCartItem & {
  onRentalPeriodChange: (period: PeriodProps) => void;
  onStartDateChange: (date: string) => void;
  onQuantityChange: (delta: number) => void;
  $isActive: boolean;
  onClick: () => void;
  onDelete: (cartId: number) => Promise<void>;
  isDeleting: boolean;
};