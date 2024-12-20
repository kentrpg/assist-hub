import { FC } from "react";
import {
  SubTitle,
  Wrapper,
  Input,
  IconWrapper,
  EmailField,
  ChangePwField,
  ChangPwBtn,
} from "../styled";
import { MdMail } from "react-icons/md";
import { FormHooks } from "../data";

const EmailWithPw: FC<FormHooks> = ({ register, errors }) => {
  return (
    <Wrapper>
      <EmailField>
        <SubTitle htmlFor="email">電子信箱</SubTitle>
        <Input
          disabled={true}
          type="email"
          id="email"
          placeholder="A0912345678@gmail.com"
          {...register("email", {
            required: "請輸入電子信箱",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "請輸入有效的電子信箱",
            },
          })}
        />
        <IconWrapper>
          <MdMail size={24} />
        </IconWrapper>
        {errors?.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </EmailField>
      <ChangePwField>
        <SubTitle htmlFor="password">密碼</SubTitle>
        <ChangPwBtn type="button">更改密碼</ChangPwBtn>
      </ChangePwField>
    </Wrapper>
  );
};

export default EmailWithPw;
