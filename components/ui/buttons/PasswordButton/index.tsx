import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { TogglePasswordStyle } from "./styled";

type TogglePasswordProps = {
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
};

const PasswordButton = ({
  showPassword,
  setShowPassword,
}: TogglePasswordProps) => {
  return (
    <TogglePasswordStyle
      role="button"
      aria-label={showPassword ? "隱藏密碼" : "顯示密碼"}
      onClick={() => setShowPassword?.(!showPassword)}
    >
      {showPassword ? <IoEyeSharp size={24} /> : <IoEyeOffSharp size={24} />}
    </TogglePasswordStyle>
  );
};

export default PasswordButton;
