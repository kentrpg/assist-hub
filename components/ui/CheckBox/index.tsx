import { useState } from "react";
import {
  Checkbox,
  CheckboxControl,
  VisuallyHiddenInput,
  CheckedStateIcon,
  UncheckedStateIcon,
  CheckboxLabel,
} from "./styled";
import { ScaleColors, ThemeColors } from "@/types/uiProps";

type CheckBoxProps = {
  id: string;
  label: string;
  gap: number;
  defaultChecked: boolean;
  fontSize: number;
  size: number;
  checkboxIconColor: ScaleColors | ThemeColors;
  labelColor: ScaleColors | ThemeColors;
};

const CheckboxField: React.FC<CheckBoxProps> = ({
  id,
  label,
  gap,
  defaultChecked,
  fontSize,
  size,
  checkboxIconColor,
  labelColor,
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  const handleToggle = () => setChecked(!checked);

  return (
    <Checkbox $gap={gap}>
      <CheckboxControl $size={size}>
        <VisuallyHiddenInput
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleToggle}
        />
        {checked ? (
          <CheckedStateIcon
            size={size}
            $checkboxIconColor={checkboxIconColor}
          />
        ) : (
          <UncheckedStateIcon
            size={size}
            $checkboxIconColor={checkboxIconColor}
          />
        )}
      </CheckboxControl>
      {label && (
        <CheckboxLabel
          $fontSize={fontSize}
          $labelColor={labelColor}
          htmlFor={id}
        >
          {label}
        </CheckboxLabel>
      )}
    </Checkbox>
  );
};

export default CheckboxField;
