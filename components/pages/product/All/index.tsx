import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  WheelChair,
  Crutch,
  Oxygen,
  Bed,
  Container,
  SideBar,
  FilterWrapper,
  CardWrapper,
  CardImg,
  Card,
  Title,
  Name,
  Rent,
  Info,
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
  CardBtn,
  InquiryIcon,
  RadioIcon,
  RadioText,
} from "./styled";
import { ProductItem, tabsData, radioOptions } from "./data";
import { MdInfo, MdRadioButtonChecked, MdOutlineCircle } from "react-icons/md";

type AllProps = {
  products: ProductItem[];
};

const All: React.FC<AllProps> = ({ products }) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [filteredProducts, setFilteredProducts] =
    useState<ProductItem[]>(products);

  useEffect(() => {
    if (router.query.type) {
      const typeIndex = tabsData.findIndex(
        (tab) => tab.value === router.query.type
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
      { shallow: true }
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
      { shallow: true }
    );
  };

  // const filterCondition = () => {
  //   const typeCondition =
  //     selectedTab !== null ? tabsData[selectedTab].label : null;
  //   const levelCondition =
  //     selectedLevel !== ""
  //       ? radioOptions.find((opt) => opt.id === selectedLevel)?.label
  //       : null;

  //   if (typeCondition && levelCondition) {
  //     return `(${typeCondition} + ${levelCondition})`;
  //   } else if (typeCondition) {
  //     return `(${typeCondition})`;
  //   } else if (levelCondition) {
  //     return `(${levelCondition})`;
  //   }
  //   return "";
  // };
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
                  <Img src={`/images/${tab.value}.png`} alt={tab.label} />
                </ImgWrapper>
                <Overlay>{tab.label}</Overlay>
              </Tab>
            ))}
          </Tabs>
        </TypeWrapper>
        <LevelWrapper>
          <Level>
            動作功能分級表
            <MdInfo color="#103F99" size={24} />
          </Level>
          <Radios>
            {radioOptions.map((option) => (
              <Radio
                key={option.id}
                onClick={() => handleRadioChange(option.id)}
              >
                <RadioIcon>
                  {selectedLevel === option.id ? (
                    <MdRadioButtonChecked size={24} />
                  ) : (
                    <MdOutlineCircle size={24} />
                  )}
                </RadioIcon>
                <RadioText>{option.label}</RadioText>
              </Radio>
            ))}
          </Radios>
        </LevelWrapper>
      </SideBar>
      <FilterWrapper>
        {/* <h2>{filterCondition() && `目前篩選條件: ${filterCondition()}`}</h2> */}
        {/* 行動輪椅區塊 */}
        {filteredProducts.some((product) => product.type === "wheelchair") && (
          <WheelChair>
            <Title $color="primary">行動輪椅</Title>
            <CardWrapper>
              {filteredProducts
                .filter((product) => product.type === "wheelchair")
                .map((product) => (
                  <Card $bg="primaryLight" key={product.id}>
                    <CardImg
                      src={product.imgSrc}
                      alt={product.imgAlt || product.name}
                    />
                    <Info>
                      <Name>{product.name}</Name>
                      <Rent>${product.rent}</Rent>
                      <div>級別:{product.level}</div>
                    </Info>
                    <CardBtn>
                      <InquiryIcon />
                      加入詢問單
                    </CardBtn>
                  </Card>
                ))}
            </CardWrapper>
          </WheelChair>
        )}
        {/* 拐杖區塊 */}
        {filteredProducts.some((product) => product.type === "crutch") && (
          <Crutch>
            <Title $color="accent">拐杖步行</Title>
            <CardWrapper>
              {filteredProducts
                .filter((product) => product.type === "crutch")
                .map((product) => (
                  <Card $bg="accentLight" key={product.id}>
                    <CardImg
                      src={product.imgSrc}
                      alt={product.imgAlt || product.name}
                    />
                    <Info>
                      <Name>{product.name}</Name>
                      <Rent>${product.rent}</Rent>
                      <div>級別:{product.level}</div>
                    </Info>
                    <CardBtn>
                      <InquiryIcon />
                      加入詢問單
                    </CardBtn>
                  </Card>
                ))}
            </CardWrapper>
          </Crutch>
        )}
        {/* 臥室寢具區塊 */}
        {filteredProducts.some((product) => product.type === "bed") && (
          <Bed>
            <Title $color="primary">臥室寢具</Title>
            <CardWrapper>
              {filteredProducts
                .filter((product) => product.type === "bed")
                .map((product) => (
                  <Card $bg="primaryLight" key={product.id}>
                    <CardImg
                      src={product.imgSrc}
                      alt={product.imgAlt || product.name}
                    />
                    <Info>
                      <Name>{product.name}</Name>
                      <Rent>${product.rent}</Rent>
                      <div>級別:{product.level}</div>
                    </Info>
                    <CardBtn>
                      <InquiryIcon />
                      加入詢問單
                    </CardBtn>
                  </Card>
                ))}
            </CardWrapper>
          </Bed>
        )}
        {/* 呼吸照護區塊 */}
        {filteredProducts.some((product) => product.type === "oxygen") && (
          <Oxygen>
            <Title $color="accent">呼吸照護</Title>
            <CardWrapper>
              {filteredProducts
                .filter((product) => product.type === "oxygen")
                .map((product) => (
                  <Card $bg="accentLight" key={product.id}>
                    <CardImg
                      src={product.imgSrc}
                      alt={product.imgAlt || product.name}
                    />
                    <Info>
                      <Name>{product.name}</Name>
                      <Rent>${product.rent}</Rent>
                      <div>級別:{product.level}</div>
                    </Info>
                    <CardBtn>
                      <InquiryIcon />
                      加入詢問單
                    </CardBtn>
                  </Card>
                ))}
            </CardWrapper>
          </Oxygen>
        )}
      </FilterWrapper>
    </Container>
  );
};

export default All;

// import { useState } from "react";
// import {
//   Container,
//   SideBar,
//   FilterWrapper,
//   WheelChair,
//   Crutch,
//   Bed,
//   Oxygen,
//   CardWrapper,
//   CardImg,
//   Card,
//   Title,
//   Name,
//   Rent,
//   Info,
//   Tabs,
//   Type,
//   TypeWrapper,
//   LevelWrapper,
//   Tab,
//   Radio,
//   Level,
//   Radios,
//   Overlay,
//   Img,
//   ImgWrapper,
//   CardBtn,
//   InquiryIcon,
//   RadioIcon,
//   RadioText,
// } from "./styled";
// import { ProductItem } from "./data";
// import { MdInfo, MdRadioButtonChecked, MdOutlineCircle } from "react-icons/md";
// import Pagination from "./Pagination";

// const tabsData = [
//   { label: "行動輪椅", imgSrc: "/images/crutch.png" },
//   { label: "柺杖步行", imgSrc: "/images/bed.png" },
//   { label: "臥室寢具", imgSrc: "/images/oxygen.png" },
//   { label: "呼吸照護", imgSrc: "/images/crutch.png" },
// ];

// const radioOptions = [
//   { id: "1", label: "具平地跑跳能力" },
//   { id: "2", label: "在平地無法跑跳，但可放手行走" },
//   { id: "3", label: "行走需扶持穩定物" },
//   { id: "4", label: "無法行走，但能在無扶桿支撐下維持坐姿" },
//   { id: "5", label: "無頭靠支撐下難以維持坐姿" },
// ];

// type AllProps = {
//   products: ProductItem[];
// };

// const All: React.FC<AllProps> = ({ products }) => {
//   const wheelchairs = products.filter(
//     (product) => product.type === "wheelchair"
//   );
//   const crutches = products.filter((product) => product.type === "crutch");
//   const beds = products.filter((product) => product.type === "bed");
//   const oxygens = products.filter((product) => product.type === "oxygen");

//   const [selectedTab, setSelectedTab] = useState<number | null>(null);
//   const [selectedLevel, setSelectedLevel] = useState<string>("");

//   const handleTabClick = (index: number) => {
//     if (selectedTab === index) {
//       setSelectedTab(null);
//     } else {
//       setSelectedTab(index);
//     }
//   };

//   const handleRadioChange = (value: string) => {
//     if (selectedLevel === value) {
//       setSelectedLevel("");
//     } else {
//       setSelectedLevel(value);
//     }
//   };

//   return (
//     <Container>
//       <SideBar>
//         {/* 左側類型篩選 */}
//         <TypeWrapper>
//           <Type>輔具類型</Type>
//           <Tabs>
//             {tabsData.map((tab, index) => (
//               <Tab
//                 key={index}
//                 $isSelected={selectedTab === index}
//                 onClick={() => handleTabClick(index)}
//               >
//                 <ImgWrapper>
//                   <Img src={tab.imgSrc} alt={tab.label} />
//                 </ImgWrapper>
//                 <Overlay>{tab.label}</Overlay>
//               </Tab>
//             ))}
//           </Tabs>
//         </TypeWrapper>
//         {/* 左側級別篩選 */}
//         <LevelWrapper>
//           <Level>
//             動作功能分級表
//             <MdInfo color="#103F99" size={24} />
//           </Level>
//           <Radios>
//             {radioOptions.map((option) => (
//               <Radio
//                 key={option.id}
//                 onClick={() => handleRadioChange(option.id)}
//               >
//                 <RadioIcon>
//                   {selectedLevel === option.id ? (
//                     <MdRadioButtonChecked size={24} color="#103F99" />
//                   ) : (
//                     <MdOutlineCircle size={24} color="#103F99" />
//                   )}
//                 </RadioIcon>
//                 <RadioText>
//                   <label htmlFor={`level${option.id}`}>{option.label}</label>
//                 </RadioText>
//               </Radio>
//             ))}
//           </Radios>
//         </LevelWrapper>
//       </SideBar>
//       {/* 商品分類區塊 */}
//       <FilterWrapper>
//         {/* 輪椅 */}
//         <WheelChair>
//           <Title $color="primary">行動輪椅</Title>
//           <CardWrapper>
//             {wheelchairs.map((product) => (
//               <Card $bg="primaryLight" key={product.id}>
//                 <CardImg
//                   src="/images/wheelChair.svg"
//                   alt={product.imgAlt || product.name}
//                 />
//                 <Info>
//                   <Name>{product.name}</Name>
//                   <Rent>${product.rent}</Rent>
//                 </Info>
//                 <CardBtn>
//                   <InquiryIcon />
//                   加入詢問單
//                 </CardBtn>
//               </Card>
//             ))}
//           </CardWrapper>
//         </WheelChair>
//         {/* 拐杖 */}
//         <Crutch>
//           <Title $color="accent">拐杖步行</Title>
//           <CardWrapper>
//             {crutches.map((product) => (
//               <Card $bg="accentLight" key={product.id}>
//                 <CardImg
//                   src="/images/wheelChair.svg"
//                   alt={product.imgAlt || product.name}
//                 />
//                 <Info>
//                   <Name>{product.name}</Name>
//                   <Rent>${product.rent}</Rent>
//                 </Info>
//                 <CardBtn>
//                   <InquiryIcon />
//                   加入詢問單
//                 </CardBtn>
//               </Card>
//             ))}
//           </CardWrapper>
//         </Crutch>
//         {/* 電動床 */}
//         <Bed>
//           <Title $color="primary">臥室寢具</Title>
//           <CardWrapper>
//             {beds.map((product) => (
//               <Card $bg="primaryLight" key={product.id}>
//                 <CardImg
//                   src="/images/wheelChair.svg"
//                   alt={product.imgAlt || product.name}
//                 />
//                 <Info>
//                   <Name>{product.name}</Name>
//                   <Rent>${product.rent}</Rent>
//                 </Info>
//                 <CardBtn>
//                   <InquiryIcon />
//                   加入詢問單
//                 </CardBtn>
//               </Card>
//             ))}
//           </CardWrapper>
//         </Bed>
//         {/* 製氧機 */}
//         <Oxygen>
//           <Title $color="accent">呼吸照護</Title>

//           <CardWrapper>
//             {oxygens.map((product) => (
//               <Card $bg="accentLight" key={product.id}>
//                 <CardImg
//                   src="/images/wheelChair.svg"
//                   alt={product.imgAlt || product.name}
//                 />
//                 <Info>
//                   <Name>{product.name}</Name>
//                   <Rent>${product.rent}</Rent>
//                 </Info>
//                 <CardBtn>
//                   <InquiryIcon />
//                   加入詢問單
//                 </CardBtn>
//               </Card>
//             ))}
//           </CardWrapper>
//         </Oxygen>
//         {/* 頁數元件 */}
//         <Pagination />
//       </FilterWrapper>
//     </Container>
//   );
// };

// export default All;
