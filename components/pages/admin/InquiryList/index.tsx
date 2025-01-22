import { FlexAlignCenter } from "@/styles/flex";
import {
  Container,
  Header,
  Title,
  ButtonGroup,
  SaveButton,
  SubmitButton,
  InfoList,
  InfoItem,
  InfoLabel,
  InfoValue,
  Suggest,
  SuggestInput,
  SelectedSection,
  Notice,
  CategorySection,
  CategoryList,
  CategoryItem,
  ProductTable,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductMaterial,
  ProductFeature,
  AddButton,
  Additional,
  SectionWrapper,
  SubTitle,
  NoticeStep,
  Thead,
  Td,
  Th,
  Tr,
  Tbody,
  DashedCard,
  FeatureList,
  Card,
  Description,
  ImageWrapper,
  Image,
  Info,
  Name,
  Reason,
  RecommendDescription,
} from "./styled";
import { MdAdd } from "react-icons/md";
import { PriceBadge, FeatureBadge } from "@/components/ui/badges";
import { formatCurrency } from "@/helpers/format/currency";
import { SuggestCheck } from "@/utils/react-icons/CheckIcon";
import { useState } from "react";

const InquiryList: React.FC = () => {
  const [reason, setReason] = useState<string>(
    "因為這款輪椅可調節，可折疊，適合需要部分支撐的患者使用。"
  );

  const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReason(e.target.value);
  };

  return (
    <Container>
      <Header>
        <Title>回覆建議單</Title>
        <ButtonGroup>
          <SaveButton>保存</SaveButton>
        </ButtonGroup>
      </Header>

      <SectionWrapper>
        <Suggest>
          <InfoList>
            <InfoItem>
              <InfoLabel>單號</InfoLabel>
              <InfoValue>AKC833</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>詢問單日期</InfoLabel>
              <InfoValue>2024/10/04</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>行動幫估</InfoLabel>
              <InfoValue>具平地跑跳能力</InfoValue>
            </InfoItem>
          </InfoList>
          <Additional>
            <InfoLabel>店家補充說明</InfoLabel>
            <SuggestInput placeholder="請在此輸入專業建議..." />
          </Additional>
        </Suggest>
      </SectionWrapper>

      <SectionWrapper>
        <SubTitle>已選擇推薦輔具 0/9</SubTitle>
      </SectionWrapper>

      <SectionWrapper>
        <SelectedSection>
          <DashedCard>
            <Notice>
              <NoticeStep>
                Step1: 請點擊下方輔具種類，針對使用者受傷狀況篩選出合適輔具
              </NoticeStep>
              <NoticeStep>
                Step2: 點擊
                <AddButton>
                  <MdAdd size={18} />
                </AddButton>
                添加到已選擇推薦輔具區塊
              </NoticeStep>
            </Notice>
          </DashedCard>
        </SelectedSection>
        <Card>
          <ImageWrapper>
            <Image src="/images/wheelChair-7.webp" alt="鋁合金輪椅" />
            <PriceBadge>{formatCurrency(1000)}/ 月</PriceBadge>
          </ImageWrapper>
          <Info>
            <Name>鋁合金輪椅</Name>
            <Description>
              為需要部分支撐的患者設計，提供穩定的行走支援，增加日常活動的安全性和信心。
            </Description>
            <FeatureList>
              <FeatureBadge>
                <SuggestCheck size={24} />
                可調節
              </FeatureBadge>
              <FeatureBadge>
                <SuggestCheck size={24} />
                可折疊
              </FeatureBadge>
            </FeatureList>
          </Info>
          <RecommendDescription>
            <Name>推薦原因</Name>
            <Reason
              value={reason}
              onChange={handleReasonChange}
              placeholder="請輸入推薦原因..."
            />
          </RecommendDescription>
        </Card>
      </SectionWrapper>

      <SectionWrapper>
        <SubTitle>選擇輔具種類</SubTitle>
        <CategorySection>
          <CategoryList>
            <CategoryItem $active>行動輔具</CategoryItem>
            <CategoryItem>拐杖步行</CategoryItem>
            <CategoryItem>臥室器具</CategoryItem>
            <CategoryItem>居家照護</CategoryItem>
            <CategoryItem>如廁沐浴</CategoryItem>
            <CategoryItem>呼吸照護</CategoryItem>
            <CategoryItem>輔具、護具</CategoryItem>
          </CategoryList>
        </CategorySection>

        <ProductTable>
          <Thead>
            <Tr>
              <Th>圖片</Th>
              <Th>輔具名稱</Th>
              <Th>月租/元</Th>
              <Th>材質</Th>
              <Th>產品特色</Th>
              <Th>動作</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <ProductImage
                  src="/images/wheelChair-7.webp"
                  alt="鋁合金輪椅"
                />
              </Td>
              <Td>
                <ProductName>Apple Watch Series 4</ProductName>
              </Td>
              <Td>
                <ProductPrice>$690.00</ProductPrice>
              </Td>
              <Td>
                <ProductMaterial>鋁合金</ProductMaterial>
              </Td>
              <Td>
                <ProductFeature>體積小、支撐性高、可調節</ProductFeature>
              </Td>
              <Td>
                <AddButton>
                  <MdAdd size={24} />
                </AddButton>
              </Td>
            </Tr>
          </Tbody>
        </ProductTable>
      </SectionWrapper>

      <SectionWrapper>
        <FlexAlignCenter>
          <SubmitButton>送出建議書</SubmitButton>
        </FlexAlignCenter>
      </SectionWrapper>
    </Container>
  );
};

export default InquiryList;
