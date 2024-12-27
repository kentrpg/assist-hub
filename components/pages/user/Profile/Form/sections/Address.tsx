import {
  SubTitle,
  Input,
  IconWrapper,
  AddressGroup,
  AddressDetails,
  AddressInput,
  AddressSelect,
  Street,
  Located,
} from "./styled";
import { MdLocalShipping } from "react-icons/md";
import { FormHooks } from "../data";
import { FC } from "react";

const Address: FC<FormHooks> = ({ register }) => {
  return (
    <AddressGroup>
      <SubTitle htmlFor="postal-code">運送地址</SubTitle>
      <AddressDetails>
        <Street>
          <AddressInput
            type="text"
            id="postal-code"
            placeholder="800"
            {...register("postalCode", { required: "請輸入郵遞區號" })}
          />
          <AddressSelect id="city" {...register("city", { required: true })}>
            <option value="KHH">高雄市</option>
            <option value="KHH">台北市</option>
          </AddressSelect>
          <AddressSelect id="district" {...register("district")}>
            <option value="">新興區</option>
            <option value="">苓雅區</option>
            <option value="">小港區</option>
          </AddressSelect>
        </Street>
        <Located>
          <Input
            type="text"
            id="address"
            placeholder="民生一路"
            {...register("address")}
          />
          <IconWrapper>
            <MdLocalShipping size={24} />
          </IconWrapper>
        </Located>
      </AddressDetails>
    </AddressGroup>
  );
};

export default Address;
