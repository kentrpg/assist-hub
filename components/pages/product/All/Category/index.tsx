import {
  Title,
  CardWrapper,
  Card,
  CardImg,
  Info,
  Name,
  Rent,
  CardBtn,
  InquiryIcon,
  CategoryContainer,
} from "./styled";
import { ProductItem } from "../data";

type ProductCategoryProps = {
  title: string;
  color: "primary" | "accent";
  bgColor: "primaryLight" | "accentLight";
  type: string;
  products: ProductItem[];
};

const Category: React.FC<ProductCategoryProps> = ({
  title,
  color,
  bgColor,
  type,
  products,
}) => {
  const filteredProducts = products.filter((product) => product.type === type);

  if (filteredProducts.length === 0) return null;

  return (
    <CategoryContainer>
      <Title $color={color}>{title}</Title>
      <CardWrapper>
        {filteredProducts.map((product) => (
          <Card $bg={bgColor} key={product.id}>
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
    </CategoryContainer>
  );
};

export default Category;
