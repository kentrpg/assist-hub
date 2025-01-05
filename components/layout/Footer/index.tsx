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
import Checkbox from "@/components/ui/Checkbox";
import { FaFacebookSquare, FaLine } from "react-icons/fa";
import { useTheme } from "styled-components";
import { useForm } from "react-hook-form";
import { ErrorMessage as FormErrorMessage } from "@/utils/react-hook-form/FormError/styled";
import InputField from "@/utils/react-hook-form/InputField";
import ForwardButton from "@/components/ui/buttons/ForwardButton";

type NewsletterForm = {
  email: string;
};

const Footer: React.FC = () => {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterForm>();

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
                <InputField
                  name="email"
                  type="tel"
                  placeholder="輸入電子信箱"
                  $color="grey300"
                  $fontSize={14}
                  $borderColor="grey300"
                  $backgroundColor="grey100"
                  $padding="7px 34px 7px 10px"
                  register={register}
                  required="請輸入電子信箱"
                  validate={{
                    domain: (value: string) => {
                      const domainRegex =
                        /@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                      return (
                        domainRegex.test(value) || "請輸入有效的電子郵件域名"
                      );
                    },
                    local: (value: string) => {
                      const beforeAtRegex =
                        /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:\\[\x01-\x09\x0b\x0c\x0e-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@/;
                      return (
                        beforeAtRegex.test(value) ||
                        "電子郵件地址 '@' 前方不應包含空白或非法字符"
                      );
                    },
                    length: (value: string) => {
                      if (value.length > 254)
                        return "電子信箱長度不得超過 254 個字符";
                      const localPart = value.split("@")[0];
                      if (localPart.length > 64)
                        return "@ 前方不得超過 64 個字符";
                      return true;
                    },
                  }}
                />
                <ForwardButton />
                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </SubscriptionField>
            </form>
            <Checkbox
              id="newsletter-consent"
              $gap={10}
              defaultChecked={false}
              $fontSize={14}
              size={24}
              $checkedIconColor="textMuted"
              $uncheckedIconColor="textMuted"
              $labelColor="grey300"
            >
              我想要了解最新的輔具資訊
            </Checkbox>
          </Newsletter>
        </Content>

        <Copyright>Copyright ©2024</Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
