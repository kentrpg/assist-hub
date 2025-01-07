import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "../data";
import {
  AddressWrapper,
  AddressField,
  FieldGroup,
  Label,
  SelectArrowIcon,
} from "./styled";
import InputField from "@/utils/react-hook-form/InputField";
import { MdArrowDropDown } from "react-icons/md";

const Address = () => {
  const { register } = useFormContext<CheckoutFormData>();

  return (
    <AddressWrapper>
      <FieldGroup>
        <Label htmlFor="zipCode" required>
          郵
        </Label>
        <InputField
          name="zipCode"
          type="text"
          placeholder="800"
          $color="textSecondary"
          $fontSize={16}
          $borderColor="border"
          $backgroundColor="secondaryBg"
          $padding="12px 16px"
          register={register}
          required="請輸入郵遞區號"
          validate={{
            pattern: (value) =>
              /^\d{3,6}$/.test(value) || "請輸入有效的郵遞區號",
          }}
        />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="city" required>
          縣市
        </Label>
        <AddressField>
          <select
            {...register("city", {
              required: "請選擇縣市",
            })}
          >
            <option value="">請選擇縣市</option>
            <option value="高雄市">高雄市</option>
          </select>
          <SelectArrowIcon>
            <MdArrowDropDown size={24} />
          </SelectArrowIcon>
        </AddressField>
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="district" required>
          區域
        </Label>
        <AddressField>
          <select
            {...register("district", {
              required: "請選擇區域",
            })}
          >
            <option value="">請選擇區域</option>
            <option value="新興區">新興區</option>
          </select>
          <SelectArrowIcon>
            <MdArrowDropDown size={24} />
          </SelectArrowIcon>
        </AddressField>
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="address" required>
          詳細地址
        </Label>
        <AddressField>
          <InputField
            name="address"
            type="text"
            placeholder="民生一路"
            $color="textSecondary"
            $fontSize={16}
            $borderColor="border"
            $backgroundColor="secondaryBg"
            $padding="12px 16px"
            register={register}
            required="請輸入詳細地址"
          />
        </AddressField>
      </FieldGroup>
    </AddressWrapper>
  );
};

export default Address;
