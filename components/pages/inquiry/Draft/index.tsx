import { Container1116 as Container } from "@/styles/container";
import {
  Header,
  Title,
  SubTitle,
  Assistive,
  CardGroup,
  AccentButton,
  ActionAssessment,
} from "../styled";
import { PageBackButton } from "@/components/ui/circulars";
import { MdArrowBack } from "react-icons/md";
import { inquiryCardColors } from "../data";
import { FlexAlignCenter } from "@/styles/flex";
import InquiryCard from "@/components/ui/cards/InquiryCard";
import DashedCard from "@/components/ui/cards/DashedCard";
import Tabs from "@/components/ui/Tabs";
import { InquiryPageProps } from "@/types/postInquiry";

const DraftInquiry = ({ data }: { data: InquiryPageProps }) => {
  const cardSlots = Array.from({ length: 3 - data.length });

  return (
    <Container>
      <Header>
        <PageBackButton>
          <MdArrowBack size={20} />
        </PageBackButton>
        <Title>詢問單</Title>
      </Header>
      <Assistive>
        <SubTitle>您已選擇的輔具</SubTitle>
        <CardGroup>
          {data.map(
            (
              { id, name, description, rent, imgSrc, imgAlt, features },
              index
            ) => (
              <InquiryCard
                key={id}
                $color={inquiryCardColors[index]}
                rent={rent}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                name={name}
                description={description}
                features={features}
              ></InquiryCard>
            )
          )}
          {cardSlots.map((_, index) => (
            <DashedCard key={`empty-${index}`} />
          ))}
        </CardGroup>
      </Assistive>
      <ActionAssessment>
        <SubTitle>請選擇最符合目前行動能力的描述（單選）：</SubTitle>
        <Tabs />
      </ActionAssessment>
      <FlexAlignCenter>
        <AccentButton>送出詢問單</AccentButton>
      </FlexAlignCenter>
    </Container>
  );
};

export default DraftInquiry;
