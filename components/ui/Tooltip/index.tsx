import { Wrapper, Container, Icon, Text } from "./styled";
import { MdInfo } from "react-icons/md";
import { TooltipProps } from "./data";

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <Wrapper>
      <Icon>
        <MdInfo size={24} />
      </Icon>
      <Container>
        <Text>{text}</Text>
      </Container>
    </Wrapper>
  );
};

export default Tooltip;
