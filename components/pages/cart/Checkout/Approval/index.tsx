import Breadcrumb from "@/components/ui/Breadcrumb";
import { Container1164 as Container } from "@/styles/container";
import {
  Context,
  Title,
  Description,
  Group,
  ImageWrapper,
  Image,
} from "./styled";
import { SecondaryButton, PrimaryButton } from "@/styles/link";
import { checkoutApproval } from "@/constants/statusPageContent";

const Approval = () => {
  const { imageProps, title, description } = checkoutApproval;

  return (
    <Container>
      <Breadcrumb mode="payment" />
      <Context>
        <ImageWrapper>
          <Image {...imageProps} width={200} height={320} />
        </ImageWrapper>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <Group>
          <SecondaryButton href="/product">繼續逛逛</SecondaryButton>
          <PrimaryButton href="/user/order">查看訂單</PrimaryButton>
        </Group>
      </Context>
    </Container>
  );
};

export default Approval;
