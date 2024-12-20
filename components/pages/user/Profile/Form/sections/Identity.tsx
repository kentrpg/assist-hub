import { FormHooks } from "../data";
import {
  SubTitle,
  IdentityField,
  IdentitySelection,
  SelectCheckbox,
} from "../styled";

const Identity: React.FC<FormHooks> = ({ register }) => {
  return (
    <IdentityField>
      <SubTitle>身份別：</SubTitle>
      <IdentitySelection>
        <SelectCheckbox>
          <input
            type="radio"
            id="middle-income"
            value="middle-income"
            {...register("identity")}
          />
          <label htmlFor="middle-income">中低收</label>
        </SelectCheckbox>
        <SelectCheckbox>
          <input
            type="radio"
            id="low-income"
            value="low-income"
            {...register("identity")}
          />
          <label htmlFor="low-income">低收</label>
        </SelectCheckbox>
      </IdentitySelection>
    </IdentityField>
  );
};

export default Identity;
