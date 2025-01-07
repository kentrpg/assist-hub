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
  footerInputField,
  NewsletterForm,
} from "@/utils/react-hook-form/InputField/data";

const Footer: React.FC = () => {
  const theme = useTheme();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterForm>({
    defaultValues: {
      email: "",
      isSubscribed: false,
    },
  });

  const onSubmit = (data: NewsletterForm) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Container>
        <Content>
          <Categories>
            <Title>輔具分類</Title>
            <CategoryLinks>
              <CategoryLink href="#">行動輔椅</CategoryLink>
              <CategoryLink href="#">臥室寢具</CategoryLink>
              <CategoryLink href="#">呼吸照護</CategoryLink>
              <CategoryLink href="#">拐杖步行</CategoryLink>
              <CategoryLink href="#">如廁沐浴</CategoryLink>
              <CategoryLink href="#">居家照護</CategoryLink>
              <CategoryLink href="#">輔具、護具</CategoryLink>
            </CategoryLinks>
          </Categories>
          <Contact>
            <Title>聯絡我們</Title>
            <AddressInfo>
              <span>營業時間：08:00-22:00</span>
              <span>電話：0912-345678</span>
              <span>地址：高雄市新興區</span>
              <SocialMediaLinks>
                <IconLinkWrapper
                  href="https://line.me"
                  target="_blank"
                  $size={24}
                  $backgroundColor="white"
                  $borderRadius={4}
                >
                  <FaLine size={24} fill={theme.colors.lineLogo} />
                </IconLinkWrapper>
                <IconLinkWrapper
                  href="https://www.facebook.com/hexschool"
                  target="_blank"
                  $size={24}
                  $backgroundColor="white"
                  $borderRadius={2}
                >
                  <FaFacebookSquare size={24} fill={theme.colors.fbLogo} />
                </IconLinkWrapper>
              </SocialMediaLinks>
            </AddressInfo>
          </Contact>
          <Newsletter>
            <Title>訂閱電子報</Title>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <SubscriptionField>
                <InputField {...footerInputField} register={register} />
                <ForwardButton />
                {errors.email && (
                  <FormErrorMessage $margin="4px">
                    {errors.email.message}
                  </FormErrorMessage>
                )}
              </SubscriptionField>
            </form>
            <CheckboxField
              id="newsletter-consent"
              control={control}
              field={{ name: "isSubscribed" }}
              $gap={10}
              $fontSize={14}
              $checkedColor="textMuted"
              $uncheckedColor="textMuted"
              $labelColor="grey300"
            >
              我想要了解最新的輔具資訊
            </CheckboxField>
          </Newsletter>
        </Content>

        <Copyright>Copyright ©2024</Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
