import { useState } from "react";
import {
  Container,
  SideBar,
  FilterWrapper,
  WheelChair,
  Crutch,
  Bed,
  Oxygen,
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
} from "./styled";
import { ProductItem } from "./data";
import { MdInfo, MdRadioButtonChecked, MdOutlineCircle } from "react-icons/md";

type AllProps = {
  products: ProductItem[];
};

const All: React.FC<AllProps> = ({ products }) => {
  const wheelchairs = products.filter(
    (product) => product.type === "wheelchair"
  );
  const crutches = products.filter((product) => product.type === "crutch");
  const beds = products.filter((product) => product.type === "bed");
  const oxygens = products.filter((product) => product.type === "oxygen");

  const [selectedLevel, setSelectedLevel] = useState<string>("");

  const handleRadioChange = (value: string) => {
    if (selectedLevel === value) {
      setSelectedLevel("");
    } else {
      setSelectedLevel(value);
    }
  };
  return (
    <Container>
      <SideBar>
        <TypeWrapper>
          <Type>輔具類型</Type>
          <Tabs>
            <Tab>
              <ImgWrapper>
                <Img src="/images/crutch.png" alt="拐杖" />
              </ImgWrapper>
              <Overlay>行動輪椅</Overlay>
            </Tab>
            <Tab>
              <ImgWrapper>
                <Img src="/images/bed.png" alt="床" />
              </ImgWrapper>
              <Overlay>柺杖步行</Overlay>
            </Tab>
            <Tab>
              <ImgWrapper>
                <Img src="/images/oxygen.png" alt="製氧機" />
              </ImgWrapper>
              <Overlay>臥室寢具</Overlay>
            </Tab>
            <Tab>
              <ImgWrapper>
                <Img src="/images/crutch.png" alt="拐杖" />
              </ImgWrapper>
              <Overlay>呼吸照護</Overlay>
            </Tab>
          </Tabs>
        </TypeWrapper>
        <LevelWrapper>
          <Level>
            動作功能分級表
            <MdInfo color="#103F99" size={24} />
          </Level>
          <Radios>
            <Radio onClick={() => handleRadioChange("1")}>
              {selectedLevel === "1" ? (
                <MdRadioButtonChecked size={24} color="#103F99" />
              ) : (
                <MdOutlineCircle size={24} color="#103F99" />
              )}
              <label htmlFor="level1">具平地跑跳能力</label>
            </Radio>
            <Radio onClick={() => handleRadioChange("2")}>
              {selectedLevel === "2" ? (
                <MdRadioButtonChecked size={24} color="#103F99" />
              ) : (
                <MdOutlineCircle size={24} color="#103F99" />
              )}
              <label htmlFor="level2">在平地無法跑跳，但可放手行走</label>
            </Radio>
            <Radio onClick={() => handleRadioChange("3")}>
              {selectedLevel === "3" ? (
                <MdRadioButtonChecked size={24} color="#103F99" />
              ) : (
                <MdOutlineCircle size={24} color="#103F99" />
              )}
              <label htmlFor="level3">行走需扶持穩定物</label>
            </Radio>
            <Radio onClick={() => handleRadioChange("4")}>
              {selectedLevel === "4" ? (
                <MdRadioButtonChecked size={24} color="#103F99" />
              ) : (
                <MdOutlineCircle size={24} color="#103F99" />
              )}
              <label htmlFor="level4">
                無法行走，但能在無扶桿支撐下維持坐姿
              </label>
            </Radio>
            <Radio onClick={() => handleRadioChange("5")}>
              {selectedLevel === "5" ? (
                <MdRadioButtonChecked size={24} color="#103F99" />
              ) : (
                <MdOutlineCircle size={24} color="#103F99" />
              )}
              <label htmlFor="level5">無頭靠支撐下難以維持坐姿</label>
            </Radio>
          </Radios>
        </LevelWrapper>
      </SideBar>
      <FilterWrapper>
        {/* 行動輪椅 */}
        <WheelChair>
          <Title $color="primary">行動輪椅</Title>
          <CardWrapper>
            {wheelchairs.map((product) => (
              <Card $bg="primaryLight" key={product.id}>
                <CardImg
                  src="/images/wheelChair.svg"
                  alt={product.imgAlt || product.name}
                />
                <Info>
                  <Name>{product.name}</Name>
                  <Rent>${product.rent}</Rent>
                </Info>
              </Card>
            ))}
          </CardWrapper>
        </WheelChair>

        {/* 拐杖步行 */}
        <Crutch>
          <Title $color="accent">拐杖步行</Title>
          <CardWrapper>
            {crutches.map((product) => (
              <Card $bg="accentLight" key={product.id}>
                <CardImg
                  src="/images/wheelChair.svg"
                  alt={product.imgAlt || product.name}
                />
                <Info>
                  <Name>{product.name}</Name>
                  <Rent>${product.rent}</Rent>
                </Info>
              </Card>
            ))}
          </CardWrapper>
        </Crutch>

        {/* 臥室寢具 */}
        <Bed>
          <Title $color="primary">臥室寢具</Title>
          <CardWrapper>
            {beds.map((product) => (
              <Card $bg="primaryLight" key={product.id}>
                <CardImg
                  src="/images/wheelChair.svg"
                  alt={product.imgAlt || product.name}
                />
                <Info>
                  <Name>{product.name}</Name>
                  <Rent>${product.rent}</Rent>
                </Info>
              </Card>
            ))}
          </CardWrapper>
        </Bed>

        {/* 製氧機 */}
        <Oxygen>
          <Title $color="accent">呼吸照護</Title>
          <CardWrapper>
            {oxygens.map((product) => (
              <Card $bg="accentLight" key={product.id}>
                <CardImg
                  src="/images/wheelChair.svg"
                  alt={product.imgAlt || product.name}
                />
                <Info>
                  <Name>{product.name}</Name>
                  <Rent>${product.rent}</Rent>
                </Info>
              </Card>
            ))}
          </CardWrapper>
        </Oxygen>
      </FilterWrapper>
    </Container>
  );
};

export default All;
