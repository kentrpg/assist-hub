import React, { FC } from "react";
import {
  GenderField as StyledGenderField,
  SubTitle,
  GenderSelection,
  SelectCheckbox,
  Error,
} from "./styled";
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
    {errors?.gender && <Error>請選擇性別</Error>}
  </StyledGenderField>
);

export default Gender;
