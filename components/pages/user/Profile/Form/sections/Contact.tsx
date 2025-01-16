import { FC } from "react";
import {
  SubTitle,
  Wrapper,
  Input,
  Error,
  PhoneField,
  ContactField,
  PhoneIcon,
  Warn,
  ContactSelect,
} from "./styled";
import { FormHooks } from "../data";
import { MdPhoneIphone } from "react-icons/md";
const Contact: FC<FormHooks> = ({ register, errors }) => {
  return (
    <Wrapper>
      <PhoneField>
        <SubTitle htmlFor="phone">
          手機號碼<Warn>*</Warn>
        </SubTitle>
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
        <PhoneIcon>
          <MdPhoneIphone size={24} color="#103F99" />
        </PhoneIcon>
        {errors?.phone && <Error>{errors.phone.message}</Error>}
      </PhoneField>
      <ContactField>
        <SubTitle htmlFor="contactTime">
          方便聯繫時間<Warn>*</Warn>
        </SubTitle>
        <ContactSelect
          id="contactTime"
          {...register("contactTime", {
            required: "請選擇方便聯繫的時間",
          })}
        >
          <option value="">請選擇</option>
          <option value="全天 09：00 - 21：00">全天 09：00 - 21：00</option>
          <option value="上午 09：00 - 12：00">上午 09：00 - 12：00</option>
          <option value="下午 12：00 - 18：00">下午 12：00 - 18：00</option>
          <option value="晚上 18：00 - 21：00">晚上 18：00 - 21：00</option>
        </ContactSelect>
        {errors?.contactTime && <Error>{errors.contactTime.message}</Error>}
      </ContactField>
    </Wrapper>
  );
};

export default Contact;
