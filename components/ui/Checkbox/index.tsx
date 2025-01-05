import { ReactNode } from "react";
import {
  CheckboxField,
  CheckboxControl,
  AccessibleInput,
  CheckboxText,
} from "./styled";
import { ColorsType } from "@/types/uiProps";
import { IconType } from "react-icons";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { PickupMethodValue } from "@/components/pages/cart/Checkout/data";

type BaseCheckboxProps = {
  id: string;
  $gap: number;
  defaultChecked: boolean;
  $fontSize?: number;
  size?: number;
  type?: "checkbox" | "radio";
  $selectedIcon?: IconType;
  $defaultIcon?: IconType;
  $checkedIconColor: ColorsType;
  $uncheckedIconColor: ColorsType;
  $labelColor: ColorsType;
  children?: ReactNode;
  required?: boolean;
};

type RadioProps = BaseCheckboxProps & {
  type: "radio";
  name: "pickupMethod";
  value: string;
  onChange: (value: PickupMethodValue) => void;
};

type CheckboxProps = BaseCheckboxProps & {
  type?: "checkbox";
  name?: string;
  value?: boolean | string;
  onChange: (value: boolean) => void;
};

type Props = RadioProps | CheckboxProps;

const Checkbox: React.FC<Props> = ({
  id,
  $gap = 8,
  defaultChecked = false,
  $fontSize = 16,
  size = 24,
  value = "",
  type = "checkbox",
  name = "",
  $selectedIcon = MdCheckBox,
  $defaultIcon = MdCheckBoxOutlineBlank,
  $checkedIconColor = "textMuted",
  $uncheckedIconColor = "textMuted",
  $labelColor = "textMuted",
  children,
  required = false,
  onChange,
}) => {
  const handleChange = () => {
    if (!onChange) return;

    if (type === "radio") {
      (onChange as RadioProps["onChange"])(value as PickupMethodValue);
    } else {
      (onChange as CheckboxProps["onChange"])(!defaultChecked);
    }
  };

  const SelectedIcon = $selectedIcon;
  const DefaultIcon = $defaultIcon;

  return (
    <CheckboxField $gap={$gap}>
      <CheckboxControl
        $size={size}
        $color={defaultChecked ? $checkedIconColor : $uncheckedIconColor}
      >
        {type === "radio" ? (
          <>
            <AccessibleInput
              type={type}
              value={value as string}
              id={id}
              checked={defaultChecked}
              onChange={handleChange}
              name={name}
            />
            {defaultChecked ? (
              <SelectedIcon size={size} />
            ) : (
              <DefaultIcon size={size} />
            )}
          </>
        ) : (
          <>
            <AccessibleInput
              type={type}
              id={id}
              checked={defaultChecked}
              onChange={handleChange}
            />
            {defaultChecked ? (
              <SelectedIcon size={size} />
            ) : (
              <DefaultIcon size={size} />
            )}
          </>
        )}
      </CheckboxControl>
      {children && (
        <CheckboxText
          $fontSize={$fontSize}
          $color={$labelColor}
          htmlFor={id}
          $isRequired={required}
        >
          {children}
        </CheckboxText>
      )}
    </CheckboxField>
  );
};

export default Checkbox;
