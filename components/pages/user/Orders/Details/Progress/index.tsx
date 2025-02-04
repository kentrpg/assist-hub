import React from "react";
import {
  ProgressBar,
  Step,
  Line,
  Node,
  Label,
  IconWrapper,
  Top,
  Bottom,
} from "./styled";
import { MdCheckCircle } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { steps } from "./data";
import { OrderData } from "../data";

type ProgressProps = {
  orderData: OrderData;
};

const Progress: React.FC<ProgressProps> = ({ orderData }) => {
  return (
    <ProgressBar>
      <Top>
        {steps.map((step, index) => {
          const isCompleted = step.isCompleted(orderData.shippingStatus);

          const isCompleteUpToCurrent =
            orderData.shippingStatus === "已抵達" || // 當 shippingStatus 是 "已抵達" 時，所有步驟都已完成
            (orderData.shippingStatus === "運送中" && index <= 1) || // 當 shippingStatus 是 "運送中" 時，"待出貨" 和 "運送中" 都已完成
            (orderData.shippingStatus === "待出貨" && index === 0) || // 當 shippingStatus 是 "待出貨" 時，只有 "待出貨" 已完成
            isCompleted; // 單步驟判斷是否已完成

          return (
            <React.Fragment key={index}>
              <Node $isCompleted={isCompleteUpToCurrent}>
                {isCompleteUpToCurrent ? (
                  <MdCheckCircle size={24} color="#FFCC1A" />
                ) : (
                  <FaRegCircle size={20} color="#FFCC1A" />
                )}
              </Node>
              {index < steps.length - 1 && (
                <Line
                  $isCompleted={
                    orderData.shippingStatus === "已抵達" || // 當 shippingStatus 是 "已抵達" 時，所有步驟之間的 Line 都已完成
                    (isCompleteUpToCurrent &&
                      steps[index + 1].isCompleted(orderData.shippingStatus))
                  }
                />
              )}
            </React.Fragment>
          );
        })}
      </Top>
      <Bottom>
        {steps.map((step, index) => (
          <Step key={index}>
            <IconWrapper>{step.icon(orderData.shippingStatus)}</IconWrapper>
            <Label $isCompleted={orderData.shippingStatus === step.label}>
              {step.label}
            </Label>
          </Step>
        ))}
      </Bottom>
    </ProgressBar>
  );
};

export default Progress;
