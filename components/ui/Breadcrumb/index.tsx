import {
  Number,
  Label,
  Breadcrumb as BreadcrumbStyle,
  CircularNmberStyle,
  Indicator,
} from "./styled";

type BreadcrumbProps = {
  mode: "cart" | "checkout" | "payment";
};

const CircularNmber = ({
  stepNumber,
  label,
  completed = false,
}: {
  stepNumber: string;
  label: string;
  completed: boolean;
}) => (
  <CircularNmberStyle $completed={completed}>
    <Number $completed={completed}>{stepNumber}</Number>
    <Label>{label}</Label>
  </CircularNmberStyle>
);

const Breadcrumb = ({ mode = "checkout" }: BreadcrumbProps) => {
  return (
    <BreadcrumbStyle>
      <CircularNmber stepNumber="1" label="購物車" completed={true} />
      <Indicator size={20} />
      <CircularNmber
        stepNumber="2"
        label="填寫資料與付款"
        completed={mode === "cart" ? false : true}
      />
      <Indicator size={20} />
      <CircularNmber
        stepNumber="3"
        label="訂單完成"
        completed={mode === "payment" ? true : false}
      />
    </BreadcrumbStyle>
  );
};

export default Breadcrumb;
