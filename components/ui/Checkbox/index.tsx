import { useState, ReactNode } from "react";
import {
  CheckboxField,
  CheckboxControl,
  VisuallyHiddenInput,
  CheckedStateIcon,
  UncheckedStateIcon,
  CheckboxLabel,
} from "./styled";
import { ColorsType } from "@/types/uiProps";

type CheckboxProps = {
  id: string;
  label?: string;
  $gap: number;
  defaultChecked: boolean;
  $fontSize?: number;
  size: number;
  $checkedIconColor: ColorsType;
  $uncheckedIconColor: ColorsType;
  $labelColor: ColorsType;
  children?: ReactNode;
  required?: boolean,
};

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  $gap = 8,
  defaultChecked = false,
  $fontSize = 16,
  size = 24,
  $checkedIconColor = "textMuted",
  $uncheckedIconColor = "textMuted",
  $labelColor = "textMuted",
  children,
  required = false,
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
      {children ? (
        <CheckboxLabel
          $fontSize={$fontSize}
          $labelColor={$labelColor}
          htmlFor={id}
          required={required}
        >
          {children}
        </CheckboxLabel>
      ) : null}
    </CheckboxField>
  );
};

export default Checkbox;
