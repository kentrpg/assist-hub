import React, { FC } from "react";
import {
  GenderField as StyledGenderField,
  SubTitle,
  GenderSelection,
  SelectCheckbox,
} from "../styled";
import { FormHooks } from "../data";

const Gender: FC<FormHooks> = ({ register, errors }) => (
  <StyledGenderField>
    <SubTitle htmlFor="male">性別</SubTitle>
    <GenderSelection>
      <SelectCheckbox>
        <input
          type="radio"
          id="male"
          value="male"
          {...register("gender", { required: true })}
        />
        <label htmlFor="male">男生</label>
      </SelectCheckbox>
      <SelectCheckbox>
        <input
          type="radio"
          id="female"
          value="female"
          {...register("gender", { required: true })}
        />
        <label htmlFor="female">女生</label>
      </SelectCheckbox>
    </GenderSelection>
    {errors?.gender && <p style={{ color: "red" }}>請選擇性別</p>}
  </StyledGenderField>
);

export default Gender;
