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
import { mockData, mockProducts, ProductFilter, Products } from "./data";

const InquiryList: React.FC = () => {
  // TBD: mockData 要改為真的 API function: getSuggest（需要再測試 parmas ?inquiryId=89）
  // const [products, setProducts] = useState<Products[]>(mockData);
  const [products, setProducts] = useState<Products[]>([]);
  const [productFilter, setProductFilter] = useState<ProductFilter[]>(
    mockProducts
  );

  const handleReasonChange = (productId: number) => (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newProducts = products.map((product) =>
      product.id === productId
        ? { ...product, reasons: e.target.value }
        : product
    );
    setProducts(newProducts);
  };

  const handleAddProduct = (product: ProductFilter) => {
    const isProductExist = products.some((p) => p.id === product.id);

    if (isProductExist) {
      return;
    }

    const newProduct: Products = {
      id: product.id,
      name: product.name,
      description: product.description,
      rent: product.rent,
      imgSrc: `http://52.172.145.130:8080/${product.image.preview}`,
      imgAlt: product.image.previewAlt,
      features: product.features,
      reasons: "",
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);

    console.log(productFilter);

    setProductFilter((prevFilter) =>
      prevFilter.filter((item) => item.id !== product.id)
    );
  };

  const handleSubmit = () => {
    const suggestInfo = {
      suggestId: 48,
      level: "2",
      additionalInfo: "test",
      isSubmitted: false,
    };

    const suggestProducts = {
      suggestProductId: 14,
      productId: 15,
      reasons: "reasons 測試",
    };
    console.log(products);
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
        <SubTitle>已選擇推薦輔具 {products.length}/9</SubTitle>
      </SectionWrapper>

      <SectionWrapper>
        {products.map((product) => (
          <Card key={product.id}>
            <ImageWrapper>
              <Image src={product.imgSrc} alt={product.imgAlt} />
              <PriceBadge>{formatCurrency(product.rent)}/ 月</PriceBadge>
            </ImageWrapper>
            <Info>
              <Name>{product.name}</Name>
              <Description>{product.description}</Description>
              <FeatureList>
                {product.features.map((feature, index) => (
                  <FeatureBadge key={index}>
                    <SuggestCheck size={24} />
                    {feature}
                  </FeatureBadge>
                ))}
              </FeatureList>
            </Info>
            <RecommendDescription>
              <Name>推薦原因</Name>
              <Reason
                value={product.reasons}
                onChange={handleReasonChange(product.id)}
                placeholder="請輸入推薦原因..."
              />
            </RecommendDescription>
          </Card>
        ))}
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
            {productFilter.map((product) => (
              <Tr key={product.id}>
                <Td>
                  <ProductImage
                    src={`http://52.172.145.130:8080/${product.image.preview}`}
                    alt={product.image.previewAlt}
                  />
                </Td>
                <Td>
                  <ProductName>{product.name}</ProductName>
                </Td>
                <Td>
                  <ProductPrice>{formatCurrency(product.rent)}</ProductPrice>
                </Td>
                <Td>
                  <ProductMaterial>
                    {product.info?.find((info) => info.infokey === "material")
                      ?.infovalue || ""}
                  </ProductMaterial>
                </Td>
                <Td>
                  <ProductFeature>{product.features.join("、")}</ProductFeature>
                </Td>
                <Td>
                  <AddButton
                    onClick={() => handleAddProduct(product)}
                    disabled={products.length > 2}
                  >
                    <MdAdd size={24} />
                  </AddButton>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </ProductTable>
      </SectionWrapper>

      <SectionWrapper>
        <FlexAlignCenter>
          <SubmitButton onClick={handleSubmit}>送出建議書</SubmitButton>
        </FlexAlignCenter>
      </SectionWrapper>
    </Container>
  );
};

export default InquiryList;
