import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
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
import { RootState } from "@/utils/redux/store";

const Gender: React.FC = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const user = useSelector((state: RootState) => state.user);
  const selectedGender = watch("gender"); // 直接從 react-hook-form 取得值

  useEffect(() => {
    if (user.gender) {
      setValue("gender", user.gender, { shouldValidate: true }); // 確保同步到 react-hook-form
    }
  }, [user.gender, setValue]);

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
            {...register("gender", {
              required: true,
              onChange: (e) =>
                setValue("gender", e.target.value, { shouldValidate: true }),
            })}
            checked={selectedGender === "男生"}
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
            {...register("gender", {
              required: true,
              onChange: (e) =>
                setValue("gender", e.target.value, { shouldValidate: true }),
            })}
            checked={selectedGender === "女生"}
          />
          <label htmlFor="female">女生</label>
        </SelectCheckbox>
      </GenderSelection>
      {errors?.gender && <Error>請選擇性別</Error>}
    </StyledGenderField>
  );
};

export default Gender;
