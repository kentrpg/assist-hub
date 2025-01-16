import React from "react";
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
import { MdPerson, MdCake } from "react-icons/md";
import { FormHooks } from "../data";

const NameWithDob: React.FC<FormHooks> = ({ register, errors }) => (
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
        {...register("dobStamp", { required: "請輸入出生年月日" })} 
      />
      {/* <DobIcon>
        <MdCake size={24} color="#103F99" />
      </DobIcon> */}
      {errors?.dobStamp && <Error>{errors.dobStamp.message}</Error>}
    </DobField>
  </Wrapper>
);

export default NameWithDob;
