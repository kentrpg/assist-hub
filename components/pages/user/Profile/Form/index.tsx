import { Container, SaveBtn } from "./styled";
import { useForm } from "react-hook-form";
import { FormData } from "./data";
import Gender from "./sections/Gender";
import NameWithDob from "./sections/NameWithDob";
import EmailWithPw from "./sections/EmailWithPw";
import Contact from "./sections/Contact";
import Address from "./sections/Address";
import Identity from "./sections/Identity";
import Disabled from "./sections/Disabled";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <Container onSubmit={onSubmit}>
      <Gender register={register} errors={errors}></Gender>
      <NameWithDob register={register} errors={errors}></NameWithDob>
      <EmailWithPw register={register} errors={errors}></EmailWithPw>
      <Contact register={register} errors={errors}></Contact>
      <Address register={register}></Address>
      <Identity register={register}></Identity>
      <Disabled register={register}></Disabled>
      <SaveBtn>儲存編輯</SaveBtn>
    </Container>
  );
};

export default Form;
