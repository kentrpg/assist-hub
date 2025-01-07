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
import { inquiryCardColors, draftInquiry } from "../data";
import { FlexAlignCenter } from "@/styles/flex";
import InquiryCard from "@/components/ui/cards/InquiryCard";
import DashedCard from "@/components/ui/cards/DashedCard";
import Tabs from "@/components/ui/Tabs";

const DraftInquiry = () => {
  const cardSlots = Array.from({ length: 3 - draftInquiry.length });

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
          {draftInquiry.map(
            ({ id, name, description, price, imgSrc, features }, index) => (
              <InquiryCard
                key={id}
                $color={inquiryCardColors[index]}
                price={price}
                imgSrc={`/images/${imgSrc}`}
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
