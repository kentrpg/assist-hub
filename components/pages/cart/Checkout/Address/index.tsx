import { FieldErrors, UseFormRegister } from "react-hook-form";
import {
  AddressWrapper,
  AddressField,
  FieldGroup,
  Label,
  SelectArrowIcon,
  AddressFieldSelect,
} from "./styled";
import InputField from "@/utils/react-hook-form/InputField";
import { MdArrowDropDown } from "react-icons/md";
import {
  FormValuesData,
  FormValuesProps,
} from "@/utils/react-hook-form/InputField/data";
import useRenderError from "@/hooks/useRenderError";
import { errorMessages } from "../data";

type AddressProps = {
  errors: FieldErrors<FormValuesProps["checkout"]>;
  register: UseFormRegister<FormValuesProps["checkout"]>;
};

const Address = ({ errors, register }: AddressProps) => {
  const { renderError } = useRenderError({
    errors,
    errorMessages,
  });

  return (
    <AddressWrapper>
      <FieldGroup>
        <Label htmlFor={FormValuesData.zipCode.id} required={false}>
          郵遞區號
        </Label>
        <InputField<"checkout">
          {...FormValuesData.zipCode}
          register={register}
          variant="checkout"
        />
        {renderError(FormValuesData.zipCode.name)}
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor={FormValuesData.city.id} required>
          縣市
        </Label>
        <AddressField>
          <AddressFieldSelect
            id={FormValuesData.city.id}
            {...register("addressCity", {
              required: FormValuesData.city.required,
            })}
          >
            <option value="" disabled>
              {FormValuesData.city.required}
            </option>
            {FormValuesData.city.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </AddressFieldSelect>
          <SelectArrowIcon>
            <MdArrowDropDown size={24} />
          </SelectArrowIcon>
        </AddressField>
        {renderError(FormValuesData.city.name)}
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor={FormValuesData.district.id} required>
          鄉鎮區
        </Label>
        <AddressField>
          <AddressFieldSelect
            id={FormValuesData.district.id}
            {...register(FormValuesData.district.name, {
              required: FormValuesData.district.required,
            })}
          >
            <option value="" disabled>
              {FormValuesData.district.required}
            </option>
            {FormValuesData.district.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </AddressFieldSelect>
          <SelectArrowIcon>
            <MdArrowDropDown size={24} />
          </SelectArrowIcon>
        </AddressField>
        {renderError("addressDistrict")}
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor={FormValuesData.addressDetail.id} required>
          詳細地址
        </Label>
        <AddressField>
          <InputField<"checkout">
            {...FormValuesData.addressDetail}
            variant="checkout"
            register={register}
          />
        </AddressField>
        {renderError(FormValuesData.addressDetail.name)}
      </FieldGroup>
    </AddressWrapper>
  );
};

export default Address;
