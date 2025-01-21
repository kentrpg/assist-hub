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
import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store";
import { useEffect, useState } from "react";
import { ResultPostInquiryType } from "@/types/postInquiry";
import { hasError, isValid } from "@/helpers/api/status";
import Empty from "@/components/pages/inquiry/Empty";
import Loading from "@/components/ui/Loading";

const DraftInquiry = () => {
  const inquiryBar = useSelector((state: RootState) => state.inquiryBar);
  const [inquiryData, setInquiryData] = useState<InquiryPageProps>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchInquiryData = async () => {
      setIsLoading(true);

      const requestData = {
        productIds: inquiryBar.map((item) => item.id),
      };

      const res = await fetch("/api/postInquiry", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result: ResultPostInquiryType = await res.json();

      if (hasError(result) || !isValid(result)) {
        alert(`${result.message}，請稍後再試`);
        setIsLoading(false);
        return;
      }

      setInquiryData(result.data || []);
      setIsLoading(false);
    };

    const isInquiryBarNotEmpty = inquiryBar.length > 0;
    isInquiryBarNotEmpty && fetchInquiryData();
  }, [inquiryBar]);

  const cardSlots = Array.from({ length: 3 - inquiryData.length });

  if (isLoading) {
    return <Loading />;
  }

  if (!inquiryData.length) {
    return <Empty />;
  }

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
          {inquiryData.map(
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
