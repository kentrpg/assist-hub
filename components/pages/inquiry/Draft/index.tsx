import { Container1116 as Container } from "@/styles/container";
import {
  Header,
  Title,
  SubTitle,
  Assistive,
  CardGroup,
  AccentButton,
  ActionAssessment,
  Card,
  DeleteButton,
} from "../styled";
import { PageBackButton } from "@/components/ui/circulars";
import { MdArrowBack, MdClose } from "react-icons/md";
import { inquiryCardColors } from "../data";
import { FlexAlignCenter } from "@/styles/flex";
import InquiryCard from "@/components/ui/cards/InquiryCard";
import DashedCard from "@/components/ui/cards/DashedCard";
import Tabs from "@/components/ui/Tabs";
import { InquiryPageProps } from "@/types/postInquiry";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/utils/redux/store";
import { useEffect, useState } from "react";
import { ResultPostInquiryType } from "@/types/postInquiry";
import { hasError, isValid } from "@/helpers/api/status";
import Empty from "@/components/pages/inquiry/Empty";
import Loading from "@/components/ui/Loading";
import { removeFromInquiryBar } from "@/utils/redux/slices/inquiryBar";
import React from "react";

const DraftInquiry = () => {
  const inquiryBar = useSelector((state: RootState) => state.inquiryBar);
  const dispatch = useDispatch();
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

    if (inquiryBar.length > 0 && inquiryData.length === 0) {
      fetchInquiryData();
    }
  }, []);

  useEffect(() => {
    setInquiryData((prev) =>
      prev.filter((item) =>
        inquiryBar.some((barItem) => barItem.id === item.id),
      ),
    );
  }, [inquiryBar]);

  const handleDelete = (id: number) => {
    dispatch(removeFromInquiryBar(id));
  };

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
          {inquiryData.map(({ id, ...props }, index) => (
            <Card key={id}>
              <DeleteButton onClick={() => handleDelete(id)}>
                <MdClose size={24} />
              </DeleteButton>
              <InquiryCard
                id={id}
                {...props}
                $color={inquiryCardColors[index]}
              />
            </Card>
          ))}
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
