import { Title, TitleGroup } from "@/components/ui/titles";
import { Content, Image, Info, Text, Description, Action } from "./styled";
import { PrimaryButton } from "@/styles/link";
import { cartSteps } from "@/constants/statusPageContent";

const CartEmpty = () => {
  return (
    <>
      <TitleGroup>
        <Title>租賃輔具，您還沒嘗試過嗎？</Title>
        <Description>租賃輔具更省心，快來填滿你的購物車吧！</Description>
      </TitleGroup>
      <Content>
        {cartSteps.map((step) => (
          <Info key={step.id}>
            <Image key={step.id} {...step.imageProps} />
            <Text>{step.title}</Text>
          </Info>
        ))}
      </Content>
      <Action>
        <PrimaryButton href="/product">探索更多輔具</PrimaryButton>
      </Action>
    </>
  );
};

export default CartEmpty;
