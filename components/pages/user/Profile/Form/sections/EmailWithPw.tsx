import { FC } from "react";
import {
  SubTitle,
  Wrapper,
  IconWrapper,
  EmailField,
  ChangePwField,
  ChangPwBtn,
  Error,
  Input,
} from "./styled";
import { MdMail } from "react-icons/md";
import { FormHooks } from "../data";

const EmailWithPw: FC<FormHooks> = ({ register, errors }) => {
  return (
    <Wrapper>
      <EmailField>
        <SubTitle $Isdisabled={true} htmlFor="email">
          電子信箱
        </SubTitle>
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
          <MdMail size={24} color="#B3B3B3" />
        </IconWrapper>
        {errors?.email && <Error>{errors.email.message}</Error>}
      </EmailField>
      <ChangePwField>
        <SubTitle htmlFor="password">密碼</SubTitle>
        <ChangPwBtn type="button">更改密碼</ChangPwBtn>
      </ChangePwField>
    </Wrapper>
  );
};

export default EmailWithPw;
