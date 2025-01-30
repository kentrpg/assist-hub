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
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import { MdAdd } from "react-icons/md";
import { PriceBadge, FeatureBadge } from "@/components/ui/badges";
import { formatCurrency } from "@/helpers/format/currency";
import { SuggestCheck } from "@/utils/react-icons/CheckIcon";
import { useState, useCallback, useEffect } from "react";
import {
  mockData,
  mockProducts,
  ProductFilter,
  Products,
  SuggestType,
  CategoryType,
  CategoryItemType,
} from "./data";
import { hasError, isValid } from "@/helpers/api/status";
import { BASE_URL_VM } from "@/constants/environment";
import { debounce } from "@/helpers/debounce";
import { selectSuggestProducts } from "@/utils/redux/slices/suggestProducts";
import { useSelector, useDispatch } from "react-redux";
import { setSuggestProducts } from "@/utils/redux/slices/suggestProducts";

const SuggestTemplate: React.FC<SuggestType> = ({
  suggestInfo,
  filterProducts,
}) => {
  console.log("suggestInfo", suggestInfo);
  // TBD: mockData 要改為真的 API function: getSuggest（需要再測試 parmas ?inquiryId=89）
  // const [products, setProducts] = useState<Products[]>(mockData);
  const [additionalInfo, setAdditionalInfo] = useState<string>(
    suggestInfo.additionalInfo,
  );
  const [products, setProducts] = useState<Products[]>(suggestInfo.products);
  const [productFilter, setProductFilter] = useState<ProductFilter[]>(
    filterProducts,
  );
  const suggestProducts = useSelector(selectSuggestProducts);

  // 分類狀態管理
  const [activeCategory, setActiveCategory] = useState<CategoryType>(
    "wheelChair",
  );
  const [isLoading, setIsLoading] = useState(false);

  // 分類選項定義
  const categories: CategoryItemType[] = [
    { type: "wheelChair", label: "行動輪椅", active: true },
    { type: "crutch", label: "拐杖步行", active: false },
    { type: "bed", label: "臥室寢具", active: false },
    { type: "oxygen", label: "呼吸照護", active: false },
  ];

  const handleAdditionalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAdditionalInfo(e.target.value);
  };

  // 使用 useCallback 來記憶化 API 調用函數
  const updateProductReason = useCallback(
    async (suggestProductId: number, productId: number, reasons: string) => {
      try {
        const requestBody = {
          suggestProductId,
          productId,
          reasons,
        };

        const result = await fetch("/api/admin/putSuggestProduct", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        const data = await result.json();

        if (hasError(data)) {
          console.error(data);
          alert("保存失敗");
          return;
        }

        console.log("data", data);

        const newProducts = products.map((product) =>
          product.productId === productId ? { ...product, reasons } : product,
        );
        setProducts(newProducts);
        alert("保存成功");
      } catch (error) {
        console.error("Error:", error);
        alert("保存失敗");
      }
    },
    [products],
  );

  // 使用 useCallback 來記憶化 debounced 函數
  const debouncedUpdate = useCallback(debounce(updateProductReason, 1500), [
    updateProductReason,
  ]);

  const handleReasonChange = (suggestProductId: number, productId: number) => {
    return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;

      // 立即更新 UI
      const newProducts = products.map((product) =>
        product.productId === productId
          ? { ...product, reasons: value }
          : product,
      );
      setProducts(newProducts);

      console.log(suggestProductId, productId, value);

      // 延遲發送 API 請求
      debouncedUpdate(suggestProductId, productId, value);
    };
  };

  const handleAddProduct = async (product: ProductFilter) => {
    console.log("product", product);
    const isProductExist = products.some((p) => p.productId === product.id);
    const isMaximum = products.length > 2;

    if (isProductExist || isMaximum) {
      return;
    }

    const requestBody = {
      suggestId: suggestInfo.suggestId,
      productId: product.id,
    };

    const result = await fetch("/api/admin/postSuggestProduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    console.log("handleAddProduct result", result);

    const data = await result.json();

    hasError(data) && alert("保存失敗");
    isValid(data) && alert("保存成功");

    // const newProduct: Products = {
    //   suggestProductId: product.suggestProductId,
    //   productId: product.id,
    //   name: product.name,
    //   description: product.description,
    //   rent: product.rent,
    //   imgSrc: `${BASE_URL_VM}/${product.image.preview}`,
    //   imgAlt: product.image.previewAlt,
    //   features: product.features,
    //   reasons: "",
    // };

    // setProducts((prevProducts) => [...prevProducts, newProduct]);

    console.log(productFilter);

    setProductFilter((prevFilter) =>
      prevFilter.filter((item) => item.id !== product.id),
    );
  };

  const handleSave = async () => {
    const requestBody = { ...suggestInfo, additionalInfo };

    const result = await fetch("/api/admin/putSuggest", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await result.json();

    if (isValid(data)) {
      console.log(data);
      alert("保存成功");
    }
  };

  const handleSubmit = () => {
    // const suggestInfo = {
    //   suggestId: 48,
    //   level: "2",
    //   additionalInfo: "test",
    //   isSubmitted: false,
    // };

    const suggestProducts = {
      suggestProductId: 14,
      productId: 15,
      reasons: "reasons 測試",
    };
    console.log(products);
  };

  const handleCategoryChange = async (type: CategoryType) => {
    setIsLoading(true);
    setActiveCategory(type);

    try {
      const queryParams = `?type=${type}&lv=-1`;
      console.log("handleCategoryChange queryParams", queryParams);
      const response = await fetch(`/api/getFilterProducts${queryParams}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      console.log("handleCategoryChange data", data);

      if (isValid(data)) {
        setProductFilter(data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <Title>回覆建議單</Title>
        <ButtonGroup>
          <SaveButton onClick={handleSave}>保存</SaveButton>
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
            <SuggestInput
              value={additionalInfo}
              onChange={handleAdditionalInfoChange}
              placeholder="請在此輸入專業建議..."
            />
          </Additional>
        </Suggest>
      </SectionWrapper>

      <SectionWrapper>
        <SubTitle>已選擇推薦輔具 {products.length}/9</SubTitle>
      </SectionWrapper>

      <SectionWrapper>
        {products.map((product) => (
          <Card key={product.suggestProductId}>
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
                onChange={handleReasonChange(
                  product.suggestProductId,
                  product.productId,
                )}
                placeholder="請輸入推薦原因..."
              />
            </RecommendDescription>
          </Card>
        ))}
        {products.length === 0 && (
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
        )}
      </SectionWrapper>

      <SectionWrapper>
        <SubTitle>選擇輔具種類</SubTitle>
        <CategorySection>
          <CategoryList>
            {categories.map((category) => (
              <CategoryItem
                key={category.type}
                $active={category.type === activeCategory}
                onClick={() => handleCategoryChange(category.type)}
              >
                {category.label}
              </CategoryItem>
            ))}
          </CategoryList>
        </CategorySection>

        {isLoading ? (
          <LoaderSpinner />
        ) : (
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
                    <ProductFeature>
                      {product.features.join("、")}
                    </ProductFeature>
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
        )}
      </SectionWrapper>

      <SectionWrapper>
        <FlexAlignCenter>
          <SubmitButton onClick={handleSubmit}>送出建議書</SubmitButton>
        </FlexAlignCenter>
      </SectionWrapper>
    </Container>
  );
};

export default SuggestTemplate;
