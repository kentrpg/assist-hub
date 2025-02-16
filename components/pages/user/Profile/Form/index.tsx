import { FormInfo, SaveBtn } from "./styled";
import { useForm, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store";
import { useEffect, useState } from "react";
import { ResultGetMemberProfile } from "@/types/getMemberProfile";
import Gender from "./sections/Gender";
import NameWithDob from "./sections/NameWithDob";
import EmailWithPw from "./sections/EmailWithPw";
import Contact from "./sections/Contact";
import Address from "./sections/Address";
import { useDispatch } from "react-redux";
import { setUser } from "@/utils/redux/slices/user";
import Loading from "@/components/ui/Loading";
import { useModal } from "@/components/ui/Modal";

const Form: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { openModal, Modal } = useModal();
  const methods = useForm<typeof ResultGetMemberProfile.data>({
    defaultValues: {
      name: "",
      gender: "",
      dobDate: "",
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

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      methods.reset({
        name: user.name,
        gender: user.gender,
        dobDate: user.dobDate,
        dobStamp: user.dobStamp,
        email: user.email,
        phone: user.phone,
        contactTime: user.contactTime,
        addressZip: user.addressZip,
        addressCity: user.addressCity,
        addressDistrict: user.addressDistrict,
        addressDetail: user.addressDetail,
      });
      setLoading(false);
    }
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
      openModal("資料更新成功");
      window.location.reload(); // 刷新當前頁面
    } else {
      console.error("更新失敗:", result.error);
      openModal(result.message || "更新失敗，請稍後再試");
    }
    setIsSubmitting(false);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FormProvider {...methods}>
          <FormInfo onSubmit={onSubmit}>
            <Gender
              register={methods.register}
              errors={methods.formState.errors}
            />
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
              {isSubmitting ? <Loading /> : "儲存編輯"}
            </SaveBtn>
          </FormInfo>
          <Modal />
        </FormProvider>
      )}
    </>
  );
};

export default Form;
