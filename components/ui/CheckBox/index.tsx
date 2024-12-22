import { useState } from "react";
import {
  Checkbox,
  CheckboxControl,
  VisuallyHiddenInput,
  CheckedStateIcon,
  UncheckedStateIcon,
  CheckboxLabel,
} from "./styled";
import { ThemeColors } from "@/types/uiProps";

type CheckBoxProps = {
  id: string;
  label: string;
  gap: number;
  defaultChecked: boolean;
  fontSize: number;
  size: number;
  checkboxIconColor: ThemeColors;
  labelColor: ThemeColors;
};

export const CheckboxField: React.FC<CheckBoxProps> = ({
  id,
  label,
  gap = 3,
  defaultChecked = true,
  fontSize = 16,
  size = 20,
  checkboxIconColor = "textMuted",
  labelColor = "gray['300']",
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  const handleToggle = () => setChecked(!checked);

  return (
    <Checkbox gap={gap}>
      <CheckboxControl size={size}>
        <VisuallyHiddenInput
          type="checkbox"
          id="newsletter-consent"
          checked={checked}
          onChange={handleToggle}
        />
        {checked ? (
          <CheckedStateIcon size={size} checkboxIconColor={checkboxIconColor} />
        ) : (
          <UncheckedStateIcon
            size={size}
            checkboxIconColor={checkboxIconColor}
          />
        )}
      </CheckboxControl>
      {label && (
        <CheckboxLabel fontSize={fontSize} labelColor={labelColor} htmlFor={id}>
          {label}
        </CheckboxLabel>
      )}
    </Checkbox>
  );
};
