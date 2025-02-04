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
import { MdOutlineShare, MdShoppingCart } from "react-icons/md";
import InquiryDetail from "@/components/pages/inquiry/Summary";
import { FeatureBadge, PriceBadge } from "@/components/ui/badges";
import { SuggestCheck } from "@/utils/react-icons/CheckIcon";
import { formatCurrency } from "@/helpers/format/currency";
import { SuggestPageProps } from "@/types/getSuggest";
import { useModal } from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { hasError, isValid } from "@/helpers/api/status";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import { FlexAlignCenter } from "@/styles/flex";
import { PrimaryIconButton } from "@/components/ui/buttons/Layout";
import { createClipboardControls } from "@/helpers/format/clipboardControls";
import { BASE_URL } from "@/constants/environment";

const Suggest = ({
  suggestCode: inquiryCode,
  createdStamp,
  level,
  additionalInfo,
  products,
}: SuggestPageProps) => {
  console.log(products);
  const [loadingIds, setLoadingIds] = useState<Set<number>>(new Set());
  const { openToast, Toast } = useToast();
  const { openModal, Modal } = useModal();

  const handleAddToCart = async (productId: number) => {
    setLoadingIds((prev) => new Set(prev).add(productId));
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
      setLoadingIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(productId);
        return newSet;
      });
      openModal(`⚠️ 伺服器忙線中，請稍後再試`);
      console.error(json.error);
    }

    isValid(json) && openToast("成功加入購物車！", "success");
    setLoadingIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(productId);
      return newSet;
    });
  };

  const handleCopyInquiryUrl = async () => {
    const clipboardControls = createClipboardControls(
      `${BASE_URL}/inquiry/${inquiryCode}`,
    );

    // 優先使用 Clipboard API
    if (navigator.clipboard) {
      const success = await clipboardControls.copyToClipboard();
      if (success) {
        openToast("成功複製詢問單網址", "success");
        return;
      }
    }

    // 不支援 Clipboard API 時使用 execCommand
    const success = clipboardControls.copyToExecCommand();
    if (success) {
      openToast("成功複製詢問單網址", "success");
    } else {
      openToast("複製失敗，請手動複製", "error");
    }
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
                    disabled={loadingIds.has(id)}
                  >
                    {loadingIds.has(id) ? (
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
      <FlexAlignCenter>
        <PrimaryIconButton onClick={handleCopyInquiryUrl}>
          <MdOutlineShare size={27} />
          分享詢問單
        </PrimaryIconButton>
      </FlexAlignCenter>
      <Toast />
      <Modal />
    </Container>
  );
};

export default Suggest;
