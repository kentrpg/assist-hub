import { Header, Title, SubTitle, Assistive, CardGroup } from "../styled";
import { Container1116 as Container } from "@/styles/container";
import { FlexAlignCenter } from "@/styles/flex";
import { MdOutlineShare } from "react-icons/md";
import { PrimaryIconButton } from "@/components/ui/buttons/Layout";
import { inquiryCardColors } from "../data";
import InquiryCard from "@/components/ui/cards/InquiryCard";
import InquiryDetail from "@/components/pages/inquiry/Summary";
import { InquiryPageProps } from "@/types/getInquiry";
import { useToast } from "@/components/ui/Toast";
import { BASE_URL } from "@/constants/environment";
import { createClipboardControls } from "@/helpers/format/clipboardControls";

const SubmittedInquiry = ({ data }: InquiryPageProps) => {
  const {
    products: submittedInquiry,
    inquiryCode,
    createdStamp,
    level,
    additionalInfo,
  } = data;

  const { openToast, Toast } = useToast();

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
        <Title>詢問單</Title>
      </Header>
      <InquiryDetail
        data={{ inquiryCode, createdStamp, level, additionalInfo }}
      />
      <Assistive>
        <SubTitle>您選擇的詢問輔具</SubTitle>
        <CardGroup>
          {submittedInquiry.map(
            (
              { id, name, description, rent, imgSrc, imgAlt, features },
              index,
            ) => (
              <InquiryCard
                key={id}
                id={id}
                $color={inquiryCardColors[index]}
                rent={rent}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                name={name}
                description={description}
                features={features}
              />
            ),
          )}
        </CardGroup>
      </Assistive>
      <FlexAlignCenter>
        <PrimaryIconButton onClick={handleCopyInquiryUrl}>
          <MdOutlineShare size={27} />
          分享詢問單
        </PrimaryIconButton>
      </FlexAlignCenter>
      <Toast />
    </Container>
  );
};

export default SubmittedInquiry;
