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

const Progress: React.FC = () => {
  return (
    <ProgressBar>
      <Top>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Node $isCompleted={step.isCompleted}>
              {step.isCompleted ? (
                <MdCheckCircle size={24} color="#FFCC1A" />
              ) : (
                <FaRegCircle size={20} color="#FFCC1A" />
              )}
            </Node>
            {index < steps.length - 1 && (
              <Line
                $isCompleted={step.isCompleted && steps[index + 1].isCompleted}
              />
            )}
          </React.Fragment>
        ))}
      </Top>
      <Bottom>
        {steps.map((step, index) => (
          <Step key={index}>
            <IconWrapper>{step.icon}</IconWrapper>
            <Label $isCompleted={step.isCompleted}>{step.label}</Label>
          </Step>
        ))}
      </Bottom>
    </ProgressBar>
  );
};

export default Progress;
