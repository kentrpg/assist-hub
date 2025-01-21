import Link from "next/link";
import { BreadCrumbContainer, Ol, Li } from "./styled";
import { MdChevronRight } from "react-icons/md";
import { ProductItem } from "../data";

type BreadCrumbProps = {
  product: ProductItem;
};

const typeMapping: Record<string, string> = {
  wheelChair: "行動輪椅",
  oxygen: "呼吸照護",
  crutch: "拐杖步行",
  bed: "臥室寢具",
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({ product }) => {
  const translatedType = typeMapping[product.type] || "未知類型"; 

  return (
    <BreadCrumbContainer>
      <Ol>
        <Li>
          <Link href="/product">所有輔具</Link>
        </Li>
        <MdChevronRight color="#888888" size={24} />
        <Li>
          <Link href={`/product?type=${product.type}`}>{translatedType}</Link>
        </Li>
        <MdChevronRight color="#888888" size={24} />
        <Li>{product.name}</Li>
      </Ol>
    </BreadCrumbContainer>
  );
};

export default BreadCrumb;
