import { FormInfo, SaveBtn } from "./styled";
import { useForm } from "react-hook-form";
import { FormData, User1 } from "./data";
import Gender from "./sections/Gender";
import NameWithDob from "./sections/NameWithDob";
import EmailWithPw from "./sections/EmailWithPw";
import Contact from "./sections/Contact";
import Address from "./sections/Address";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: User1 });

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <FormInfo onSubmit={onSubmit}>
      <Gender register={register} errors={errors}></Gender>
      <NameWithDob register={register} errors={errors}></NameWithDob>
      <EmailWithPw register={register} errors={errors}></EmailWithPw>
      <Contact register={register} errors={errors}></Contact>
      <Address register={register} errors={errors}></Address>
      <SaveBtn>儲存編輯</SaveBtn>
    </FormInfo>
  );
};

export default Form;
