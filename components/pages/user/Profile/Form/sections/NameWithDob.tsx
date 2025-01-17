import React, { useRef } from "react";
import dynamic from "next/dynamic";
import {
  Wrapper,
  NameField,
  SubTitle,
  DobField,
  Input,
  Error,
  NameIcon,
  DobIcon,
  Warn,
} from "./styled";
import { MdPerson } from "react-icons/md";
import { FormHooks } from "../data";
import { useFormContext } from "react-hook-form";

const MdCake = dynamic(
  () => import("react-icons/md").then((mod) => mod.MdCake),
  { ssr: false },
);

const NameWithDob: React.FC<FormHooks> = ({ register, errors }) => {
  const dobInputRef = useRef<HTMLInputElement | null>(null);
  const { watch, setValue } = useFormContext(); // 使用 React Hook Form 上下文
  const dobStampValue = watch("dobStamp"); // 監控 dobStamp 的值

  const handleInputClick = () => {
    dobInputRef.current?.showPicker?.();
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("dobStamp", e.target.value); // 手動更新 React Hook Form 的值
  };

  return (
    <Wrapper>
      <NameField>
        <SubTitle htmlFor="name">
          姓名<Warn>*</Warn>
        </SubTitle>
        <Input
          type="text"
          id="name"
          placeholder="王小姐"
          {...register("name", { required: "請輸入姓名" })}
        />
        <NameIcon>
          <MdPerson size={24} color="#103F99" />
        </NameIcon>
        {errors?.name && <Error>{errors.name.message}</Error>}
      </NameField>

      <DobField>
        <SubTitle htmlFor="dobStamp">出生年月日</SubTitle>
        <Input
          type="date"
          id="dobStamp"
          ref={dobInputRef}
          value={dobStampValue || ""} // 綁定 React Hook Form 的值
          onChange={handleDateChange} // 更新 React Hook Form 的值
          onClick={handleInputClick} // 打開日期選擇器
        />
        <DobIcon onClick={handleInputClick}>
          <MdCake size={24} color="#103F99" />
        </DobIcon>
        {errors?.dobStamp && <Error>{errors.dobStamp.message}</Error>}
      </DobField>
    </Wrapper>
  );
};

export default NameWithDob;
