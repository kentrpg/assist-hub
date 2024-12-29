import { MdArrowForward } from "react-icons/md";
import { ForwardButtonStyle } from "./styled";

const ForwardButton = () => {
  return ( 
    <ForwardButtonStyle type="submit">
      <MdArrowForward size={24} />
    </ForwardButtonStyle>
  );
};

export default ForwardButton;
