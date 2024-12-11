import {
  Form,
  Select,
  GenderField,
  SubTitle,
  GenderSelection,
  ProfileContainer,
  ProfileTitile,
  SaveBtn,
  NameField,
  DobField,
  Wrapper,
  Input,
  IconWrapper,
  EmailField,
  ChangePwField,
  ChangPwBtn,
  PhoneField,
  ContactField,
  AddressGroup,
  AddressDetails,
  AddressInput,
  AddressSelect,
} from "./styled";
import { MdPerson, MdMail } from "react-icons/md";
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
        <Form onSubmit={onSubmit}>
          <ProfileTitile>基本資料</ProfileTitile>
          <GenderField>
            <SubTitle htmlFor="male">性別</SubTitle>
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
              <SubTitle htmlFor="name">姓名</SubTitle>
              <Input
                type="text"
                id="name"
                placeholder="王小姐"
                {...register("name", { required: "請輸入姓名" })}
              />
              <IconWrapper>
                <MdPerson size={24} />
              </IconWrapper>
              {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
              )}
            </NameField>
            <DobField>
              <SubTitle htmlFor="dob">出生年月日：</SubTitle>
              <Input
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
          <Wrapper>
            <EmailField>
              <SubTitle htmlFor="email">電子信箱</SubTitle>
              <Input
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
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
            </EmailField>
            <ChangePwField>
              <SubTitle htmlFor="password">密碼</SubTitle>
              <ChangPwBtn type="button">更改密碼</ChangPwBtn>
            </ChangePwField>
          </Wrapper>

          {/* 手機與聯繫時間 */}
          <Wrapper>
            <PhoneField>
              <SubTitle htmlFor="phone">手機號碼</SubTitle>
              <Input
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
              <IconWrapper>
                <MdPerson size={24} />
              </IconWrapper>
              {errors.phone && (
                <p style={{ color: "red" }}>{errors.phone.message}</p>
              )}
            </PhoneField>
            <ContactField>
              <SubTitle htmlFor="contact-time">方便聯繫時間</SubTitle>
              <Select
                id="contact-time"
                {...register("contactTime", { required: "請選擇聯繫時間" })}
              >
                <option value="morning">上午 09:00 - 12:00</option>
                <option value="afternoon">下午 12:00 - 18:00</option>
                <option value="evening">晚上 18:00 - 21:00</option>
              </Select>
              {errors.contactTime && (
                <p style={{ color: "red" }}>{errors.contactTime.message}</p>
              )}
            </ContactField>
          </Wrapper>

          {/* 運送地址 */}
          <AddressGroup>
            <SubTitle htmlFor="postal-code">運送地址</SubTitle>
            <AddressDetails>
              <AddressInput
                type="text"
                id="postal-code"
                placeholder="800"
                {...register("postalCode", { required: "請輸入郵遞區號" })}
              />
              <AddressSelect
                id="city"
                {...register("city", { required: true })}
              >
                <option value="KHH">高雄市</option>
              </AddressSelect>

              <AddressSelect id="district" {...register("district")}>
                <option value="">新興區</option>
                <option value="">苓雅區</option>
                <option value="">小港區</option>
              </AddressSelect>
              <Input
                type="text"
                id="address"
                placeholder="民生一路"
                {...register("address")}
              />
            </AddressDetails>
          </AddressGroup>

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

          {/* 身障證明 */}
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
        </Form>
      </ProfileContainer>
    </>
  );
};

export default Profile;
