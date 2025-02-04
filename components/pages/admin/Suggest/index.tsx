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
  LoadingText,
} from "./styled";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import { MdAdd } from "react-icons/md";
import { PriceBadge, FeatureBadge } from "@/components/ui/badges";
import { formatCurrency } from "@/helpers/format/currency";
import { SuggestCheck } from "@/utils/react-icons/CheckIcon";
import { useState, useCallback, useEffect, useRef } from "react";
import {
  ProductFilter,
  Products,
  SuggestType,
  CategoryType,
  categories,
  ProductFilterState,
} from "./data";
import { hasError, isValid } from "@/helpers/api/status";
import { BASE_URL_VM } from "@/constants/environment";
import { debounce } from "@/helpers/debounce";
import { selectSuggestProducts } from "@/utils/redux/slices/suggestProducts";
import { useSelector, useDispatch } from "react-redux";
import { setSuggestProducts } from "@/utils/redux/slices/suggestProducts";
import { useRouter } from "next/router";
import { useToast } from "@/components/ui/Toast";
import { useModal } from "@/components/ui/Modal";
import { SuggestProductType } from "@/types/getAdminSuggest";

const SuggestTemplate: React.FC<SuggestType> = ({
  suggestInfo,
  filterProducts,
}) => {
  console.log("filterProducts", filterProducts);
  const router = useRouter();
  const { openToast, Toast } = useToast();
  const { openModal, Modal } = useModal();
  const [additionalInfo, setAdditionalInfo] = useState<string>(
    suggestInfo.additionalInfo || "",
  );
  const [products, setProducts] = useState<SuggestProductType["products"]>(
    suggestInfo.products,
  );
  const [productFilter, setProductFilter] = useState<ProductFilterState>(
    filterProducts,
  );
  const [activeCategory, setActiveCategory] = useState<CategoryType>(
    "wheelChair",
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSavedReasonsValues = useRef<Record<number, string>>({});
  const [editingReasons, setEditingReasons] = useState<Record<number, string>>(
    {},
  );
  const [savingStates, setSavingStates] = useState<Record<number, boolean>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [isAddProductLoading, setIsAddProductLoading] = useState(false);

  const submitControls = {
    isDisabled: isSubmitting || !products.length,
    text: (() => {
      if (isSubmitting) return null;
      return products.length ? "送出建議單" : "請添加輔具";
    })(),
    isLoading: isSubmitting,
  };

  const handleAdditionalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newValue = e.target.value;
    setAdditionalInfo(newValue);
    debouncedUpdateAdditionalInfo(newValue);
  };

  const updateAdditionalInfo = useCallback(
    async (newAdditionalInfo: string) => {
      setIsSaving(true);

      const requestBody = {
        suggestId: suggestInfo.suggestId,
        level: suggestInfo.level,
        additionalInfo: newAdditionalInfo,
        isSubmitted: false,
      };

      const result = await fetch("/api/admin/putSuggest", {
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
        openModal("保存失敗，請稍後再試");
        setAdditionalInfo(suggestInfo.additionalInfo || "");
        return;
      }

      setIsSaving(false);
    },
    [suggestInfo],
  );

  const debouncedUpdateAdditionalInfo = useCallback(
    debounce(updateAdditionalInfo, 1000),
    [updateAdditionalInfo],
  );

  const handleSave = async () => {
    const requestBody = {
      suggestId: suggestInfo.suggestId,
      level: suggestInfo.level,
      additionalInfo: additionalInfo,
      isSubmitted: false,
    };

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
      openToast("保存成功", "success");
    }
  };

  const updateProductReason = useCallback(
    async (suggestProductId: number, productId: number, reasons: string) => {
      setSavingStates((prev) => ({ ...prev, [productId]: true }));

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
        openModal("保存失敗，請稍後再試");
        setEditingReasons((prev) => ({
          ...prev,
          [productId]: lastSavedReasonsValues.current[productId] || "",
        }));
        return;
      }

      lastSavedReasonsValues.current[productId] = reasons;

      console.log("editingReasons", editingReasons, editingReasons[productId]);

      setSavingStates((prev) => ({ ...prev, [productId]: false }));
    },
    [],
  );

  const debouncedUpdate = useCallback(debounce(updateProductReason, 1000), [
    updateProductReason,
  ]);

  const handleReasonChange = (suggestProductId: number, productId: number) => {
    return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;

      setEditingReasons((prev) => ({
        ...prev,
        [productId]: value,
      }));

      debouncedUpdate(suggestProductId, productId, value);
    };
  };

  const getReasonValue = (product: SuggestProductType["products"][number]) => {
    return editingReasons[product.productId] !== undefined
      ? editingReasons[product.productId]
      : product.reasons;
  };

  const handleAddProduct = async (product: ProductFilter) => {
    setIsAddProductLoading(true);
    const isProductExist = products.some((p) => p.productId === product.id);
    const isMaximum = products.length > 8;

    if (isProductExist || isMaximum) {
      return;
    }

    const requestBody = {
      suggestId: suggestInfo.suggestId,
      productId: product.id,
    };

    const response = await fetch("/api/admin/postSuggestProduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    if (hasError(result)) {
      openToast("系統錯誤，請稍後再試", "error");
      setIsAddProductLoading(false);
      return;
    }

    const newProduct: SuggestProductType["products"][number] = {
      suggestProductId: result.data.suggestProductId,
      productId: product.id,
      name: product.name,
      description: product.description,
      rent: product.rent,
      imgSrc: `${BASE_URL_VM}/${product.image.preview}`,
      imgAlt: product.image.previewAlt,
      features: product.features,
      reasons: "",
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);

    setProductFilter((prev) => ({
      ...prev,
      [activeCategory]: prev[activeCategory].filter(
        (item) => item.id !== product.id,
      ),
    }));

    openToast("保存成功", "success");

    setIsAddProductLoading(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const requestBody = {
      suggestId: suggestInfo.suggestId,
      level: suggestInfo.level,
      additionalInfo: additionalInfo,
      isSubmitted: true,
    };

    const result = await fetch("/api/admin/putSuggest", {
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
      openModal("保存失敗，請稍後再試");
      setIsSubmitting(false);
      return;
    }

    openToast("保存成功", "success");
    setIsSubmitting(false);
    router.push("/admin/suggests");
  };

  const handleCategoryChange = async (type: CategoryType) => {
    setIsLoading(true);
    setActiveCategory(type);

    if (productFilter[type].length > 0) {
      setIsLoading(false);
      return;
    }

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

    if (hasError(data)) {
      console.error("Error fetching products:", data);
      setIsLoading(false);
      return;
    }

    if (isValid(data)) {
      setProductFilter((prev) => ({
        ...prev,
        [type]: (data.data || []).filter(
          (product: ProductFilter) =>
            !products.some(
              (selectedProduct) => selectedProduct.productId === product.id,
            ),
        ),
      }));
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <Header>
        <Title>
          回覆建議單{isSaving && <LoadingText> 儲存中...</LoadingText>}
        </Title>
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
              disabled={isSaving}
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
              <Image
                src={product.imgSrc}
                alt={product.imgAlt}
                width={150}
                height={150}
              />
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
              <Name>
                推薦原因
                {savingStates[product.productId] && (
                  <LoadingText> 儲存中...</LoadingText>
                )}
              </Name>
              <Reason
                value={getReasonValue(product)}
                onChange={handleReasonChange(
                  product.suggestProductId,
                  product.productId,
                )}
                placeholder="請輸入推薦原因..."
                disabled={savingStates[product.productId]} // 在保存時禁用輸入
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
              {productFilter[activeCategory].map((product) => (
                <Tr key={product.id} $isLoading={isAddProductLoading}>
                  <Td>
                    <ProductImage
                      src={`${BASE_URL_VM}/${product.image.preview}`}
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
                      disabled={products.length > 8}
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
          <SubmitButton
            onClick={handleSubmit}
            disabled={submitControls.isDisabled}
          >
            {submitControls.isLoading ? (
              <LoaderSpinner $color="grey300" />
            ) : (
              submitControls.text
            )}
          </SubmitButton>
        </FlexAlignCenter>
      </SectionWrapper>
      <Modal />
      <Toast />
    </Container>
  );
};

export default SuggestTemplate;
