import Link from "next/link";
import { BreadCrumbContainer, Ol, Li } from "./styled";
import { MdChevronRight } from "react-icons/md";
import { ProductItem } from "../data";

type BreadCrumbProps = {
  product: ProductItem;
};

const BreadCrumb: React.FC<BreadCrumbProps> = ({ product }) => {
  return (
    <BreadCrumbContainer>
      <Ol>
        <Li>
          <Link href="/product">所有輔具</Link>
        </Li>
        <MdChevronRight color="#888888" size={24} />
        <Li>
          <Link href={`/product/filter?type=${product.type}`}>行動輪椅</Link>
        </Li>
        <MdChevronRight color="#888888" size={24} />
        <Li>{product.name}</Li>
      </Ol>
    </BreadCrumbContainer>
  );
};

export default BreadCrumb;
