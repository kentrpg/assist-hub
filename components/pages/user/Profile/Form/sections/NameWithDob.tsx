import React from "react";
import {
  Wrapper,
  NameField,
  SubTitle,
  DobField,
  Input,
  Error,
  IconWrapper,
} from "./styled";
import { MdPerson } from "react-icons/md";
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
        <MdPerson size={24} color="#103F99" />
      </IconWrapper>
      {errors?.name && <Error>{errors.name.message}</Error>}
    </NameField>
    <DobField>
      <SubTitle $Isdisabled={true} htmlFor="dob">
        出生年月日
      </SubTitle>
      <Input
        disabled={true}
        type="date"
        id="dob"
        {...register("dob", { required: "請輸入出生年月日" })}
      />
      {/* {errors?.dob && <Error>{errors.dob.message}</Error>} */}
    </DobField>
  </Wrapper>
);

export default NameWithDob;
