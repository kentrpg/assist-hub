import React from "react";
import {
  Wrapper,
  NameField,
  SubTitle,
  DobField,
  Input,
  IconWrapper,
} from "../styled";
import { MdCake } from "react-icons/md";
import { FormHooks } from "../data";

const NameWithDob: React.FC<FormHooks> = ({ register, errors }) => (
  <Wrapper>
    <NameField>
      <SubTitle htmlFor="name">姓名</SubTitle>
      <Input
        type="text"
        id="name"
        placeholder="王小姐"
        {...register("name", { required: "請輸入姓名" })}
      />
      <IconWrapper>
        <MdCake size={24} />
      </IconWrapper>
      {errors?.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
    </NameField>
    <DobField>
      <SubTitle htmlFor="dob">出生年月日</SubTitle>
      <Input
        disabled={true}
        type="date"
        id="dob"
        {...register("dob", { required: "請輸入出生年月日" })}
      />
      {errors?.dob && <p style={{ color: "red" }}>{errors.dob.message}</p>}
    </DobField>
  </Wrapper>
);

export default NameWithDob;
