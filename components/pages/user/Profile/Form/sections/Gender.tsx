import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  GenderField as StyledGenderField,
  SubTitle,
  GenderSelection,
  SelectCheckbox,
  Error,
  Warn,
  GenderInput,
} from "./styled";
import { MdRadioButtonChecked, MdOutlineCircle } from "react-icons/md";
import { FormHooks } from "../data";
import { RootState } from "@/utils/redux/store";

const Gender: FC<FormHooks> = ({ register, errors }) => {
  const user = useSelector((state: RootState) => state.user);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  // 使用 useEffect 初始化選中值
  useEffect(() => {
    if (user.gender) {
      setSelectedGender(user.gender);
    }
  }, [user.gender]);

  const handleChange = (value: string) => {
    setSelectedGender(value);
  };

  return (
    <StyledGenderField>
      <SubTitle htmlFor="male">
        性別<Warn>*</Warn>
      </SubTitle>
      <GenderSelection>
        <SelectCheckbox>
          {selectedGender === "男生" ? (
            <MdRadioButtonChecked size={24} color="#103F99" />
          ) : (
            <MdOutlineCircle size={24} color="#E9E5DE" />
          )}

          <GenderInput
            type="radio"
            id="male"
            value="男生"
            {...register("gender", { required: true })}
            checked={selectedGender === "男生"}
            onChange={() => handleChange("男生")}
          />
          <label htmlFor="male">男生</label>
        </SelectCheckbox>
        <SelectCheckbox>
          {selectedGender === "女生" ? (
            <MdRadioButtonChecked size={24} color="#103F99" />
          ) : (
            <MdOutlineCircle size={24} color="#E9E5DE" />
          )}

          <GenderInput
            type="radio"
            id="female"
            value="女生"
            {...register("gender", { required: true })}
            checked={selectedGender === "女生"}
            onChange={() => handleChange("女生")}
          />
          <label htmlFor="female">女生</label>
        </SelectCheckbox>
      </GenderSelection>
      {errors?.gender && <Error>請選擇性別</Error>}
    </StyledGenderField>
  );
};

export default Gender;
