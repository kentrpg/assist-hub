import { FC } from "react";
import {
  Select,
  SubTitle,
  Wrapper,
  Input,
  IconWrapper,
  PhoneField,
  ContactField,
} from "../styled";
import { MdPhoneIphone } from "react-icons/md";
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
        <IconWrapper>
          <MdPhoneIphone size={24} />
        </IconWrapper>
        {errors?.phone && (
          <p style={{ color: "red" }}>{errors.phone.message}</p>
        )}
      </PhoneField>
      <ContactField>
        <SubTitle htmlFor="contact-time">方便聯繫時間</SubTitle>
        <Select
          id="contact-time"
          {...register("contactTime", { required: "請選擇聯繫時間" })}
        >
          <option value="morning">上午 09:00 - 12:00</option>
          <option value="afternoon">下午 12:00 - 18:00</option>
          <option value="evening">晚上 18:00 - 21:00</option>
        </Select>
        {errors?.contactTime && (
          <p style={{ color: "red" }}>{errors.contactTime.message}</p>
        )}
      </ContactField>
    </Wrapper>
  );
};

export default Contact;
