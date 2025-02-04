import { useState } from "react";
import { Container1116 as Container } from "@/styles/container";
import {
  Header,
  Title,
  SubTitle,
  Assistive,
  FooterTitle,
  RecommendationList,
  Card,
  ImageWrapper,
  Image,
  Info,
  Name,
  Description,
  FeatureList,
  RecommendDescription,
  RentButton,
  Reason,
} from "./styled";
import { MdShoppingCart } from "react-icons/md";
import InquiryDetail from "@/components/pages/inquiry/Summary";
import { FeatureBadge, PriceBadge } from "@/components/ui/badges";
import { SuggestCheck } from "@/utils/react-icons/CheckIcon";
import { formatCurrency } from "@/helpers/format/currency";
import { SuggestPageProps } from "@/types/getSuggest";
import { useModal } from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { hasError, isValid } from "@/helpers/api/status";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";

const Suggest = ({
  suggestCode: inquiryCode,
  createdStamp,
  level,
  additionalInfo,
  products,
}: SuggestPageProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { openToast, Toast } = useToast();
  const { openModal, Modal } = useModal();

  const handleAddToCart = async (productId: number) => {
    setIsLoading(true);
    const result = await fetch("/api/postCarts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: productId,
      }),
    });

    const json = await result.json();

    if (hasError(json)) {
      setIsLoading(false);
      openModal(`⚠️ 伺服器忙線中，請稍後再試`);
      console.error(json.error);
    }

    isValid(json) && openToast("成功加入購物車！", "success");
    setIsLoading(false);
  };

  return (
    <Container>
      <Header>
        <Title>建議單</Title>
      </Header>
      <InquiryDetail
        data={{ inquiryCode, createdStamp, level, additionalInfo }}
      />
      <Assistive>
        <SubTitle>店家推薦輔具</SubTitle>
        <RecommendationList>
          {products.map(
            (
              {
                id,
                name,
                description,
                rent,
                imgSrc,
                imgAlt,
                features,
                reasons,
              },
              index,
            ) => (
              <Card key={`${id}-${index}`}>
                <ImageWrapper>
                  <Image src={imgSrc} alt={imgAlt} />
                  <PriceBadge>{formatCurrency(rent)}/ 月</PriceBadge>
                </ImageWrapper>
                <Info>
                  <Name>{name}</Name>
                  <Description>{description}</Description>
                  <FeatureList>
                    {features.map((feature, featureIndex) => (
                      <FeatureBadge key={`${id}-${featureIndex}`}>
                        <SuggestCheck size={24} />
                        {feature}
                      </FeatureBadge>
                    ))}
                  </FeatureList>
                </Info>
                <RecommendDescription>
                  <Name>推薦原因</Name>
                  <Reason value={reasons} readOnly />
                  <RentButton
                    onClick={() => {
                      handleAddToCart(id);
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <LoaderSpinner $color="white" />
                    ) : (
                      <>
                        <MdShoppingCart size={24} />
                        加入購物車
                      </>
                    )}
                  </RentButton>
                </RecommendDescription>
              </Card>
            ),
          )}
        </RecommendationList>
      </Assistive>
      <FooterTitle>若有其他進一步關於輔具問題，請來電告知。</FooterTitle>
      <Toast />
      <Modal />
    </Container>
  );
};

export default Suggest;
