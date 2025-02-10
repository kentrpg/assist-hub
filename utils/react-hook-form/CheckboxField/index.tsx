import {
  CheckboxGroup,
  CheckboxControl,
  AccessibleInput,
  CheckboxText,
} from "./styled";
import { ColorsType } from "@/types/uiProps";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useController, Control, Path, FieldValues } from "react-hook-form";
import { InfoLink } from "@/styles/link";
import {
  HrefMarkerProps,
  StringToJSXWrapper,
} from "@/components/ui/StringToJSXWrapper";

export type BaseCheckboxType<T extends FieldValues> = {
  id: string;
  field: {
    name: Path<T>;
    validation?: {
      required?: string;
    };
  };
  $isRequired?: boolean;
  $gap: number;
  $fontSize: number;
  $checkedColor: ColorsType;
  $uncheckedColor: ColorsType;
  $color: ColorsType;
  label: string;
  convertString?: HrefMarkerProps[];
};

type CheckboxFieldProps<T extends FieldValues> = BaseCheckboxType<T> & {
  control: Control<T>;
  $fontSize?: number;
};

const CheckboxField = <T extends FieldValues>({
  id,
  control,
  field,
  $gap = 12,
  $isRequired = false,
  $fontSize = 16,
  $checkedColor = "textMuted",
  $uncheckedColor = "textMuted",
  $color = "textMuted",
  label,
  convertString = [],
}: CheckboxFieldProps<T>) => {
  const {
    field: { onChange, value: fieldValue },
  } = useController({
    name: field.name,
    control,
    rules: field.validation,
  });

  return (
    <CheckboxGroup $gap={$gap}>
      <CheckboxControl
        $size={24}
        $color={fieldValue ? $checkedColor : $uncheckedColor}
      >
        <AccessibleInput
          type="checkbox"
          id={id}
          checked={fieldValue === true}
          onChange={(e) => onChange(e.target.checked)}
        />
        {fieldValue ? (
          <MdCheckBox size={24} />
        ) : (
          <MdCheckBoxOutlineBlank size={24} />
        )}
      </CheckboxControl>
      <CheckboxText
        $fontSize={$fontSize}
        $color={$color}
        htmlFor={id}
        $isRequired={$isRequired}
      >
        <StringToJSXWrapper text={label} convertString={convertString}>
          {({ text, index }) => (
            <InfoLink href={convertString[index].href}>{text}</InfoLink>
          )}
        </StringToJSXWrapper>
      </CheckboxText>
    </CheckboxGroup>
  );
};

export default CheckboxField;
