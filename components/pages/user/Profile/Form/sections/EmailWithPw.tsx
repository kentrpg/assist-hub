import { FC } from "react";
import {
  SubTitle,
  Wrapper,
  EmailField,
  ChangePwField,
  ChangPwBtn,
  Error,
  Input,
  EmailIcon,
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
          $Isdisabled={true}
          disabled={true}
          type="email"
          id="email"
          placeholder="A0912345678@example.com"
          {...register("email", {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "請輸入有效的電子信箱",
            },
          })}
        />
        <EmailIcon>
          <MdMail size={24} color="#B3B3B3" />
        </EmailIcon>
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
