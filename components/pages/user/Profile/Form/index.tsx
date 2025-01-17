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

const Form = () => {
  const user = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    const { email, ...payload } = data; // 排除 email，因為後端不需要
    console.log("提交的資料：", payload);

    try {
      // 在提交時從 API 中獲取 Token
      const tokenResponse = await fetch("/api/auth/get-token");
      if (!tokenResponse.ok) {
        throw new Error("無法獲取 Token");
      }
      const { token } = await tokenResponse.json();

      if (!token) {
        console.error("未找到 token");
        alert("未找到驗證 Token，請重新登入！");
        setLoading(false);
        return;
      }

      // 發送更新請求
      const response = await fetch(
        "http://52.172.145.130:8080/api/v1/member/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // 使用獲取的 token
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API 回傳錯誤：", errorText);
        alert("更新失敗：" + errorText);
        throw new Error("無法更新使用者資料");
      }

      const result = await response.json();
      console.log("更新成功：", result);

      // 更新成功提示並刷新頁面
      alert("資料已成功更新！");
      window.location.reload(); // 刷新當前頁面
    } catch (error) {
      console.error("更新資料時發生錯誤：", error);
      alert("更新失敗，請稍後再試！");
    } finally {
      setLoading(false);
    }
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
        <SaveBtn disabled={loading}>儲存編輯</SaveBtn>
      </FormInfo>
    </FormProvider>
  );
};

export default Form;
