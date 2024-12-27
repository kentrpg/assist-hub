import { MdArrowBack } from "react-icons/md";
import { NavigateBackButton } from "./styled";

const PageBackButton = () => {
  return (
    <NavigateBackButton>
      <MdArrowBack size={20} />
    </NavigateBackButton>
  );
};

export default PageBackButton;
