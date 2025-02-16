import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  SideBar,
  FilterWrapper,
  Tabs,
  Type,
  TypeWrapper,
  LevelWrapper,
  Tab,
  Radio,
  Level,
  Radios,
  Overlay,
  Img,
  ImgWrapper,
  RadioIcon,
  RadioText,
  NoProductsMessage,
} from "./styled";
import { ResultGetProducts } from "@/types/getProducts";
import { tabsData, radioOptions } from "./data";
import { MdRadioButtonChecked, MdOutlineCircle } from "react-icons/md";
import Category from "./Category";
import Tooltip from "@/components/ui/Tooltip";
import { layoutPath } from "@/constants/imagePath";

type AllProps = {
  products: typeof ResultGetProducts.data;
};

const All: React.FC<AllProps> = ({ products }) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [filteredProducts, setFilteredProducts] =
    useState<typeof ResultGetProducts.data>(products);

  useEffect(() => {
    if (router.query.type) {
      const typeIndex = tabsData.findIndex(
        (tab) => tab.value === router.query.type,
      );
      if (typeIndex !== -1) {
        setSelectedTab(typeIndex);
      }
    }

    if (router.query.level) {
      setSelectedLevel(router.query.level as string);
    }
  }, [router.query]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesTab =
        selectedTab === null || product.type === tabsData[selectedTab].value;
      const matchesLevel =
        selectedLevel === "" || product.level === selectedLevel;
      return matchesTab && matchesLevel;
    });
    setFilteredProducts(filtered);
  }, [selectedTab, selectedLevel, products]);

  const handleTabClick = (index: number) => {
    const newSelectedTab = index === selectedTab ? null : index;
    setSelectedTab(newSelectedTab);

    const newQuery = { ...router.query };

    if (newSelectedTab !== null) {
      newQuery.type = tabsData[newSelectedTab].value;
    } else {
      delete newQuery.type;
    }

    router.push(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true },
    );
  };

  const handleRadioChange = (value: string) => {
    const newSelectedLevel = value === selectedLevel ? "" : value;
    setSelectedLevel(newSelectedLevel);

    const newQuery = { ...router.query };

    if (newSelectedLevel !== "") {
      newQuery.level = newSelectedLevel;
    } else {
      delete newQuery.level;
    }

    router.push(
      {
        pathname: router.pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <Container>
      <SideBar>
        <TypeWrapper>
          <Type>輔具類型</Type>
          <Tabs>
            {tabsData.map((tab, index) => (
              <Tab
                key={index}
                $isSelected={selectedTab === index}
                onClick={() => handleTabClick(index)}
              >
                <ImgWrapper>
                  <Img
                    src={`${layoutPath}/type-${tab.value}.webp`}
                    alt={tab.label}
                  />
                </ImgWrapper>
                <Overlay>{tab.label}</Overlay>
              </Tab>
            ))}
          </Tabs>
        </TypeWrapper>
        <LevelWrapper>
          <Level>
            動作功能分級表
            <Tooltip text="依照活動能力，對應粗大動作功能分級表找到合適輔具。" />
          </Level>
          <Radios>
            {radioOptions.map((option) => (
              <Radio
                key={option.id}
                onClick={() => handleRadioChange(option.id)}
              >
                <RadioIcon>
                  {selectedLevel === option.id ? (
                    <MdRadioButtonChecked color="#103F99" size={24} />
                  ) : (
                    <MdOutlineCircle color="#E9E5DE" size={24} />
                  )}
                </RadioIcon>
                <RadioText>{option.label}</RadioText>
              </Radio>
            ))}
          </Radios>
        </LevelWrapper>
      </SideBar>
      <FilterWrapper>
        {selectedTab !== null &&
        selectedLevel !== "" &&
        filteredProducts.length === 0 ? (
          <NoProductsMessage> 抱歉，沒有符合條件的商品。</NoProductsMessage>
        ) : (
          <>
            <Category
              title="行動輪椅"
              color="primary"
              bgColor="primaryLight"
              type="wheelChair"
              products={filteredProducts}
            />
            <Category
              title="拐杖步行"
              color="accent"
              bgColor="accentLight"
              type="crutch"
              products={filteredProducts}
            />
            <Category
              title="臥室寢具"
              color="primary"
              bgColor="primaryLight"
              type="bed"
              products={filteredProducts}
            />
            <Category
              title="呼吸照護"
              color="accent"
              bgColor="accentLight"
              type="oxygen"
              products={filteredProducts}
            />
          </>
        )}
      </FilterWrapper>
    </Container>
  );
};

export default All;
