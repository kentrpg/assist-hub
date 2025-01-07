import { Container1116 as Container } from "@/styles/container";
import {
  PageTitle as Title,
  PageTitleGroup as Group,
} from "@/components/ui/titles";
import { FlexAlignCenter } from "@/styles/flex";
import { Button, List, Image, Info, Text, Description } from "./styled";
import { CartSteps } from "./data";

const CartEmpty = () => {
  return (
    <Container>
      <Group>
        <Title>租賃輔具，您還沒嘗試過嗎？</Title>
        <Description>租賃輔具更省心，快來填滿你的購物車吧！</Description>
      </Group>
      <List>
        {CartSteps.map((step) => (
          <Info key={step.id}>
            <Image key={step.id} src={step.imgSrc} alt={step.description} />
            <Text>{step.description}</Text>
          </Info>
        ))}
      </List>
      <FlexAlignCenter>
        <Button>探索更多輔具</Button>
      </FlexAlignCenter>
    </Container>
  );
};

export default CartEmpty;
