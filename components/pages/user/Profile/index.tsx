import {
  GenderField,
  SubTitle,
  GenderSelection,
  ProfileContainer,
  ProfileTitile,
  SaveBtn,
  NameField,
  DobField,
  Wrapper,
} from "./styled";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  gender: string;
  name: string;
  dob: string;
  email: string;
  phone: string;
  contactTime: string;
  postalCode: string;
  city: string;
  district: string;
  address: string;
  identity: string;
  declaration: string;
};

const Profile = () => {
  const {
    register,
    // setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <ProfileContainer>
        <form onSubmit={onSubmit}>
          <ProfileTitile>基本資料</ProfileTitile>
          <GenderField>
            <SubTitle htmlFor="male">性別：</SubTitle>
            <GenderSelection>
              <input
                type="radio"
                id="male"
                value="male"
                {...register("gender", { required: true })}
              />
              <label htmlFor="male">男生</label>
              <input
                type="radio"
                id="female"
                value="female"
                {...register("gender", { required: true })}
              />
              <label htmlFor="female">女生</label>
            </GenderSelection>
            {errors.gender && <p style={{ color: "red" }}>請選擇性別</p>}
          </GenderField>

          {/* 姓名與生日 */}
          <Wrapper>
            <NameField>
              <SubTitle htmlFor="name">姓名：</SubTitle>
              <input
                type="text"
                id="name"
                placeholder="王小姐"
                {...register("name", { required: "請輸入姓名" })}
              />
              {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
              )}
            </NameField>
            <DobField>
              <SubTitle htmlFor="dob">出生年月日：</SubTitle>
              <input
                type="date"
                id="dob"
                {...register("dob", { required: "請輸入出生年月日" })}
              />
              {errors.dob && (
                <p style={{ color: "red" }}>{errors.dob.message}</p>
              )}
            </DobField>
          </Wrapper>
          {/* 電子信箱與密碼 */}
          <div>
            <label htmlFor="email">電子信箱：</label>
            <input
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
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}

            <label htmlFor="password">密碼：</label>
            <button type="button">更改密碼</button>
          </div>

          {/* 手機與聯繫時間 */}
          <div>
            <label htmlFor="phone">手機號碼：</label>
            <input
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
            {errors.phone && (
              <p style={{ color: "red" }}>{errors.phone.message}</p>
            )}

            <label htmlFor="contact-time">方便聯繫時間：</label>
            <select
              id="contact-time"
              {...register("contactTime", { required: "請選擇聯繫時間" })}
            >
              <option value="morning">上午 09:00 - 12:00</option>
              <option value="afternoon">下午 12:00 - 18:00</option>
              <option value="evening">晚上 18:00 - 21:00</option>
            </select>
            {errors.contactTime && (
              <p style={{ color: "red" }}>{errors.contactTime.message}</p>
            )}
          </div>

          {/* 遞送地址 */}
          <div>
            <label htmlFor="postal-code">遞送地址：</label>
            <input
              type="text"
              id="postal-code"
              placeholder="800"
              {...register("postalCode", { required: "請輸入郵遞區號" })}
            />
            <input
              type="text"
              id="city"
              placeholder="高雄市"
              {...register("city", { required: true })}
            />
            <input
              type="text"
              id="district"
              placeholder="新興區"
              {...register("district")}
            />
            <input
              type="text"
              id="address"
              placeholder="民生一路"
              {...register("address")}
            />
          </div>

          {/* 身份別 */}
          <div>
            <label>身份別：</label>
            <input
              type="radio"
              id="middle-income"
              value="middle-income"
              {...register("identity")}
            />
            <label htmlFor="middle-income">中低收</label>
            <input
              type="radio"
              id="low-income"
              value="low-income"
              {...register("identity")}
            />
            <label htmlFor="low-income">低收</label>
          </div>

          {/* 身障聲明 */}
          <div>
            <label>身障證明：</label>
            <input
              type="checkbox"
              id="disabled-yes"
              value="yes"
              {...register("declaration")}
            />
            <label htmlFor="disabled-yes">有</label>
            <input
              type="checkbox"
              id="disabled-no"
              value="no"
              {...register("declaration")}
            />
            <label htmlFor="disabled-no">無</label>
          </div>
          <SaveBtn>儲存編輯</SaveBtn>
        </form>
      </ProfileContainer>
    </>
  );
};

export default Profile;
