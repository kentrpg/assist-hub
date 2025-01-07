import { FC } from "react";
import {
  SubTitle,
  Wrapper,
  Input,
  Error,
  PhoneField,
  ContactField,
} from "./styled";
import { FormHooks } from "../data";
const Contact: FC<FormHooks> = ({ register, errors }) => {
  return (
    <Wrapper>
      <PhoneField>
        <SubTitle htmlFor="phone">手機號碼</SubTitle>
        <Input
          type="tel"
          id="phone"
          placeholder="0912345678"
          {...register("phone", {
            required: "請輸入手機號碼",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "請輸入有效的手機號碼",
            },
          })}
        />
        {errors?.phone && <Error>{errors.phone.message}</Error>}
      </PhoneField>
      <ContactField>
        <SubTitle htmlFor="contactTime">方便聯繫時間</SubTitle>
        <Input
          type="text"
          id="contactTime"
          placeholder="上午 09:00 - 12:00"
          {...register("contactTime", { required: "請輸入正確的數值" })}
        />
        {errors?.contactTime && <Error>{errors.contactTime.message}</Error>}
      </ContactField>
    </Wrapper>
  );
};

export default Contact;
