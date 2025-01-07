import { GetStaticProps } from "next";
import Checkout from "@/components/pages/cart/Checkout";
import fs from "fs/promises";
import path from "path";
import {
  LabeledValue,
  SummaryProps,
} from "@/components/pages/cart/Checkout/data";
import { MainWrapper } from "@/styles/wrappers";

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "utils/api/dev/GET_orders.json");
  const { data } = JSON.parse(await fs.readFile(filePath, "utf8"));

  const storeInfoDisplay: LabeledValue[] = [
    {
      label: "店家電話",
      value: data.shipping.storeInfo.phone,
    },
    {
      label: "營業時間",
      value: data.shipping.storeInfo.businessHours,
    },
    {
      label: "地址",
      value: data.shipping.storeInfo.address,
    },
  ];

  const totalCostDisplay: LabeledValue = {
    label: "總計",
    value: data.costs.amount,
  };

  const costDisplays: LabeledValue[] = [
    {
      label: "租金",
      value: data.costs.rent,
    },
    {
      label: "押金",
      value: data.costs.deposit,
    },
    {
      label: "運費",
      value: data.costs.fee,
    },
  ];

  const summaryData: SummaryProps = {
    image: {
      src: data.product.imgSrc,
      alt: data.product.imgAlt,
      width: 80,
      height: 80,
    },
    title: data.product.name,
    details: [
      {
        label: "數量",
        value: `x${data.product.details.quantity}`,
      },
      {
        label: "租借日期",
        value: data.product.details.rentDate,
      },
      {
        label: "歸還日期",
        value: data.product.details.returnDate,
      },
    ],
  };

  return {
    props: {
      data,
      storeInfoDisplay,
      totalCostDisplay,
      costDisplays,
      summaryData,
    },
  };
};

const CheckoutPage = (props: {
  data: any;
  storeInfoDisplay: LabeledValue[];
  totalCostDisplay: LabeledValue;
  costDisplays: LabeledValue[];
  summaryData: SummaryProps;
}) => {
  return (
    <MainWrapper>
      <Checkout
        data={props.data}
        storeInfoDisplay={props.storeInfoDisplay}
        totalCostDisplay={props.totalCostDisplay}
        costDisplays={props.costDisplays}
        summaryData={props.summaryData}
      />
    </MainWrapper>
  );
};

export default CheckoutPage;
