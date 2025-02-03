import { Container1344 as Container } from "@/styles/container";
import {
  Categories,
  AddressInfo,
  Contact,
  Copyright,
  Content,
  CategoryLink,
  Wrapper,
  Newsletter,
  SubscriptionField,
  SocialMediaLinks,
  Title,
  CategoryLinks,
  Image,
} from "./styled";
import { IconLinkWrapper } from "@/utils/react-icons/iconWrappers";
import CheckboxField from "@/utils/react-hook-form/CheckboxField";
import { FaFacebookSquare, FaLine } from "react-icons/fa";
import { useTheme } from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorMessage as FormErrorMessage } from "@/utils/react-hook-form/FormError/styled";
import InputField from "@/utils/react-hook-form/InputField";
import ForwardButton from "@/components/ui/buttons/ForwardButton";
import {
  FormValuesData,
  FormValuesProps,
} from "@/utils/react-hook-form/InputField/data";
import { ImageWrapper } from "@/components/ui/images";
import Link from "next/link";

const Footer: React.FC = () => {
  const theme = useTheme();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesProps["newsletter"]>({
    defaultValues: {
      email: "",
      isSubscribed: false,
    },
  });

  const onSubmit = (data: FormValuesProps["newsletter"]) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Container>
        <Content>
          <Categories>
            <Title>輔具分類</Title>
            <CategoryLinks>
              <CategoryLink
                href="/product?type=wheelChair"
                passHref
                legacyBehavior
              >
                <a>行動輔椅</a>
              </CategoryLink>
              <CategoryLink href="/product?type=oxygen" passHref legacyBehavior>
                <a>呼吸照護</a>
              </CategoryLink>
              <CategoryLink href="/product?type=crutch" passHref legacyBehavior>
                <a>拐杖步行</a>
              </CategoryLink>
              <CategoryLink href="/product?type=bed" passHref legacyBehavior>
                <a>臥室寢具</a>
              </CategoryLink>
              <CategoryLink href="/product/bathroom" passHref legacyBehavior>
                <a>如廁沐浴</a>
              </CategoryLink>
              <CategoryLink href="/product/homecare" passHref legacyBehavior>
                <a>居家照護</a>
              </CategoryLink>
              <CategoryLink href="/product/aids" passHref legacyBehavior>
                <a>輔具、護具</a>
              </CategoryLink>
            </CategoryLinks>
          </Categories>
          <Contact>
            <Title>聯絡我們</Title>
            <AddressInfo>
              <span>營業時間：08:00-22:00</span>
              <span>電話：0912-345678</span>
              <span>地址：高雄市新興區</span>
              <SocialMediaLinks>
                <Link href="https://line.me" target="_blank">
                  <Image
                    src="/images/social/LINE_icon.webp"
                    alt="LINE logo"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="https://www.facebook.com/hexschool" target="_blank">
                  <Image
                    src="/images/social/META-logo.webp"
                    alt="META logo"
                    width={20}
                    height={20}
                  />
                </Link>
              </SocialMediaLinks>
            </AddressInfo>
          </Contact>
          <Newsletter>
            <Title>訂閱電子報</Title>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <SubscriptionField>
                <InputField<"newsletter">
                  {...FormValuesData.email}
                  register={register}
                  variant="default"
                />
                <ForwardButton />
                {errors.email && (
                  <FormErrorMessage $margin="4px">
                    {errors.email.message}
                  </FormErrorMessage>
                )}
              </SubscriptionField>
              <CheckboxField<FormValuesProps["newsletter"]>
                id="newsletter-consent"
                control={control}
                field={{ name: "isSubscribed" }}
                $gap={10}
                $fontSize={14}
                $checkedColor="textMuted"
                $uncheckedColor="textMuted"
                $color="grey300"
                label="我想要了解最新的輔具資訊"
              />
            </form>
          </Newsletter>
        </Content>

        <Copyright>Copyright ©2024</Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
