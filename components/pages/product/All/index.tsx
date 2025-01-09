import {
  Container,
  SideBar,
  FilteredResults,
  WheelChair,
  Crutch,
  Bed,
  Oxygen,
  CardWrapper,
  Img,
  Card,
  Title,
  Name,
  Rent,
  Info,
  Icons,
  Type,
  IconWrapper,
} from "./styled";
import { ProductItem } from "./data";

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

  return (
    <Container>
      <SideBar>
        <Type>輔具類型</Type>
        <Icons>
          <IconWrapper>
            <img src="/images/crutch.png" alt="" />
          </IconWrapper>
          <IconWrapper>
            <img src="/images/bed.png" alt="" />
          </IconWrapper>
          <IconWrapper>
            <img src="/images/oxygen.png" alt="" />
          </IconWrapper>
          <IconWrapper>
            <img src="/images/crutch.png" alt="" />
          </IconWrapper>
        </Icons>
      </SideBar>
      <FilteredResults>
        {/* 行動輪椅 */}
        <WheelChair>
          <Title $color="primary">行動輪椅</Title>
          <CardWrapper>
            {wheelchairs.map((product) => (
              <Card $bg="primaryLight" key={product.id}>
                <Img
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
                <Img
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
                <Img
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
          <Title $color="accent">製氧機</Title>
          <CardWrapper>
            {oxygens.map((product) => (
              <Card $bg="accentLight" key={product.id}>
                <Img
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
      </FilteredResults>
    </Container>
  );
};

export default All;
