import { FC } from "react";
import {
  SubTitle,
  SelectCheckbox,
  DisabilityField,
  DisabilitySelection,
} from "./styled";
import { FormHooks } from "../data";

const Disable: FC<FormHooks> = ({ register }) => {
  return (
    <DisabilityField>
      <SubTitle>身障證明：</SubTitle>
      <DisabilitySelection>
        <SelectCheckbox>
          <input
            type="radio"
            id="disabled-yes"
            value="yes"
            {...register("declaration")}
          />
          <label htmlFor="disabled-yes">有</label>
        </SelectCheckbox>
        <SelectCheckbox>
          <input
            type="radio"
            id="disabled-no"
            value="no"
            {...register("declaration")}
          />
          <label htmlFor="disabled-no">無</label>
        </SelectCheckbox>
      </DisabilitySelection>
    </DisabilityField>
  );
};

export default Disable;
