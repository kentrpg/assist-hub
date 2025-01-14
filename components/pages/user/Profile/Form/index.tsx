import { FormInfo, SaveBtn } from "./styled";
import { useForm, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store";
import { useEffect } from "react";
import { FormData } from "./data";
import Gender from "./sections/Gender";
import NameWithDob from "./sections/NameWithDob";
import EmailWithPw from "./sections/EmailWithPw";
import Contact from "./sections/Contact";
import Address from "./sections/Address";

const Form = () => {
  const user = useSelector((state: RootState) => state.user);

  const methods = useForm<FormData>({
    defaultValues: {
      name: "",
      gender: "",
      dobStamp: "",
      email: "",
      phone: "",
      contactTime: "",
      addressZip: "",
      addressCity: "",
      addressDistrict: "",
      addressDetail: "",
    },
  });

  // 當 user 資料更新時，重設表單值
  useEffect(() => {
    methods.reset({
      name: user.name,
      gender: user.gender,
      dobStamp: user.dobStamp,
      email: user.email,
      phone: user.phone,
      contactTime: user.contactTime,
      addressZip: user.addressZip,
      addressCity: user.addressCity,
      addressDistrict: user.addressDistrict,
      addressDetail: user.addressDetail,
    });
  }, [user, methods]);

  const onSubmit = methods.handleSubmit((data) => console.log(data));

  return (
    <FormProvider {...methods}>
      <FormInfo onSubmit={onSubmit}>
        <Gender register={methods.register} errors={methods.formState.errors} />
        <NameWithDob
          register={methods.register}
          errors={methods.formState.errors}
        />
        <EmailWithPw
          register={methods.register}
          errors={methods.formState.errors}
        />
        <Contact
          register={methods.register}
          errors={methods.formState.errors}
        />
        <Address
          register={methods.register}
          errors={methods.formState.errors}
        />
        <SaveBtn>儲存編輯</SaveBtn>
      </FormInfo>
    </FormProvider>
  );
};

export default Form;
