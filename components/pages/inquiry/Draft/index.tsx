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
import { MdClose } from "react-icons/md";
import { inquiryCardColors } from "../data";
import { FlexAlignCenter } from "@/styles/flex";
import InquiryCard from "@/components/ui/cards/InquiryCard";
import DashedCard from "@/components/ui/cards/DashedCard";
import Tabs from "@/components/ui/Tabs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/utils/redux/store";
import {
  removeFromInquiryBar,
  resetInquiryBar,
} from "@/utils/redux/slices/inquiryBar";
import {
  selectUserInquiry,
  resetUserInquiry,
} from "@/utils/redux/slices/userInquiry";
import Empty from "@/components/pages/inquiry/Empty";
import { useRouter } from "next/router";
import { hasError, isValid } from "@/helpers/api/status";

const DraftInquiry = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const inquiryBar = useSelector((state: RootState) => state.inquiryBar);
  const userInquiry = useSelector(selectUserInquiry);

  const handleDelete = (id: number) => {
    dispatch(removeFromInquiryBar(id));
  };

  const handleSubmit = async () => {
    const { level, additionalInfo } = userInquiry;
    const postInquiryData = {
      productIds: inquiryBar.map((item) => item.id),
      level,
      additionalInfo,
    };

    const res = await fetch("/api/member/postInquiry", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postInquiryData),
    });

    const result = await res.json();

    if (hasError(result)) {
      alert(result.message);
      return;
    }

    if (isValid(result)) {
      alert(result.message);
      await router.push("/user/inquiry");
      dispatch(resetInquiryBar());
      dispatch(resetUserInquiry());
    }
  };

  const cardSlots = Array.from({ length: 3 - inquiryBar.length });

  if (!inquiryBar.length) {
    return <Empty />;
  }

  return (
    <Container>
      <Header>
        <Title>詢問單</Title>
      </Header>
      <Assistive>
        <SubTitle>您已選擇的輔具</SubTitle>
        <CardGroup>
          {inquiryBar.map(({ id, ...props }, index) => (
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
        <AccentButton onClick={handleSubmit}>送出詢問單</AccentButton>
      </FlexAlignCenter>
    </Container>
  );
};

export default DraftInquiry;
