import { FormInfo, SaveBtn } from "./styled";
import { useForm, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store";
import { useEffect, useState } from "react";
import { FormData } from "./data";
import Gender from "./sections/Gender";
import NameWithDob from "./sections/NameWithDob";
import EmailWithPw from "./sections/EmailWithPw";
import Contact from "./sections/Contact";
import Address from "./sections/Address";
import { useDispatch } from "react-redux";
import { setUser } from "@/utils/redux/slices/user";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";

const Form = () => {
  const user = useSelector((state: RootState) => state.user);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

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

  const onSubmit = methods.handleSubmit(async (data) => {
    setIsSubmitting(true);

    const res = await fetch("/api/member/putProfile", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    console.log("Form result", result);

    if (result.statusCode === 200 && result.status) {
      dispatch(setUser(data));
      alert("資料更新成功");
    } else {
      console.error("更新失敗:", result.error);
      alert(result.message || "更新失敗，請稍後再試");
    }
    setIsSubmitting(false);
  });

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
        <SaveBtn disabled={isSubmitting}>
          {isSubmitting ? <LoaderSpinner /> : "儲存編輯"}
        </SaveBtn>
      </FormInfo>
    </FormProvider>
  );
};

export default Form;
