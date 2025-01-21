import { Header, Title, SubTitle, Assistive, CardGroup } from "../styled";
import { Container1116 as Container } from "@/styles/container";
import { FlexAlignCenter } from "@/styles/flex";
import { MdArrowBack, MdOutlineShare } from "react-icons/md";
import { PageBackButton } from "@/components/ui/circulars";
import { PrimaryIconButton } from "@/components/ui/buttons/Layout";
import { inquiryCardColors } from "../data";
import InquiryCard from "@/components/ui/cards/InquiryCard";
import InquiryDetail from "@/components/pages/inquiry/Summary";
import { InquiryPageProps } from "@/types/getInquiry";

const SubmittedInquiry = ({ data }: InquiryPageProps) => {
  const {
    products: submittedInquiry,
    inquiryCode,
    createdStamp,
    level,
    additionalInfo,
  } = data;

  return (
    <Container>
      <Header>
        <PageBackButton>
          <MdArrowBack size={20} />
        </PageBackButton>
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
              index
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
            )
          )}
        </CardGroup>
      </Assistive>
      <FlexAlignCenter>
        <PrimaryIconButton>
          <MdOutlineShare size={27} />
          分享詢問單
        </PrimaryIconButton>
      </FlexAlignCenter>
    </Container>
  );
};

export default SubmittedInquiry;
