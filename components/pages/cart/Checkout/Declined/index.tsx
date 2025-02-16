import { Container1164 as Container } from "@/styles/container";
import {
  Context,
  Title,
  Description,
  Group,
  ImageWrapper,
  Image,
} from "./styled";
import { checkoutDeclined } from "@/constants/statusPageContent";
import { getButtonComponent } from "@/helpers/mapping/linkMap";

const Declined = () => {
  const { imageProps, title, description, links } = checkoutDeclined;

  return (
    <Container>
      <Context>
        <ImageWrapper>
          <Image {...imageProps} width={200} height={320} />
        </ImageWrapper>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <Group>
          {links?.map((link, index) => {
            const ButtonComponent = getButtonComponent(link.theme);

            return (
              <ButtonComponent
                key={index}
                href={link.href}
                target={link.target}
              >
                {link.text}
              </ButtonComponent>
            );
          })}
        </Group>
      </Context>
    </Container>
  );
};

export default Declined;
