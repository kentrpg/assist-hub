import { Header, Title, SubTitle, Assistive, CardGroup } from "./styled";
import { Container1116 as Container } from "@/styles/container";
import { FlexAlignCenter } from "@/styles/flex";
import { MdArrowBack, MdOutlineShare } from "react-icons/md";
import { PageBackButton } from "@/components/ui/circulars";
import { PrimaryIconButton } from "@/components/ui/buttons";

import {
  inquiryCardColors,
  inquiryCards,
  inquiryInfo,
  inquiryInfoMapping,
} from "./data";
import InquiryCard from "@/components/ui/cards/InquiryCard";
import InquiryDetail from "@/components/pages/inquiry/Details";

const Inquiry = () => {
  return (
    <Container>
      <Header>
        <PageBackButton>
          <MdArrowBack size={20} />
        </PageBackButton>
        <Title>詢問單</Title>
      </Header>
      <InquiryDetail data={inquiryInfo} mapping={inquiryInfoMapping} />
      <Assistive>
        <SubTitle>您選擇的詢問輔具</SubTitle>
        <CardGroup>
          {inquiryCards.map(
            ({ id, name, description, price, imgSrc, features }, index) => (
              <InquiryCard
                id={id}
                $color={inquiryCardColors[index]}
                price={price}
                imgSrc={`/images/${imgSrc}`}
                name={name}
                description={description}
                features={features}
              ></InquiryCard>
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

export default Inquiry;
