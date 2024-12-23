import { useState } from "react";
import {
  CheckboxField,
  CheckboxControl,
  VisuallyHiddenInput,
  CheckedStateIcon,
  UncheckedStateIcon,
  CheckboxLabel,
} from "./styled";
import { ScaleColors, ThemeColors } from "@/types/uiProps";

type CheckboxProps = {
  id: string;
  label: string;
  $gap: number;
  defaultChecked: boolean;
  $fontSize: number;
  size: number;
  $checkedIconColor: ScaleColors | ThemeColors;
  $uncheckedIconColor: ScaleColors | ThemeColors;
  $labelColor: ScaleColors | ThemeColors;
};

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  $gap,
  defaultChecked,
  $fontSize,
  size,
  $checkedIconColor,
  $uncheckedIconColor,
  $labelColor,
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  const handleToggle = () => setChecked(!checked);

  return (
    <CheckboxField $gap={$gap}>
      <CheckboxControl $size={size}>
        <VisuallyHiddenInput
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleToggle}
        />
        {checked ? (
          <CheckedStateIcon size={size} $checkedIconColor={$checkedIconColor} />
        ) : (
          <UncheckedStateIcon
            size={size}
            $uncheckedIconColor={$uncheckedIconColor}
          />
        )}
      </CheckboxControl>
      {label && (
        <CheckboxLabel
          $fontSize={$fontSize}
          $labelColor={$labelColor}
          htmlFor={id}
        >
          {label}
        </CheckboxLabel>
      )}
    </CheckboxField>
  );
};

export default Checkbox;
