import React from "react";
import {
  BarContainer,
  Product,
  Products,
  Name,
  Rent,
  Img,
  Info,
  InquiryBtn,
  DeleteBtn,
  IconWrapper,
  EmptyCircle,
  EmptyCircleText,
} from "./styled";
import { MdOutlineClose } from "react-icons/md";
import { RootState } from "@/utils/redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromInquiryBar } from "@/utils/redux/slices/inquiryBar";
import Link from "next/link";
import { useRouter } from "next/router";
import { formatCurrency } from "@/helpers/format/currency";

const InquiryBar: React.FC = () => {
  const router = useRouter();
  const inquiryBar = useSelector((state: RootState) => state.inquiryBar);
  const dispatch = useDispatch();

  // 動態生成剩餘的「空的圈圈」
  const emptySlots = Array(3 - inquiryBar.length)
    .fill(null)
    .map((_, index) => index + inquiryBar.length + 1);

  // 如果沒有任何商品，則不顯示 Bar
  if (inquiryBar.length === 0) return null;

  return (
    <BarContainer>
      <Products>
        {/* 已添加的商品 */}
        {inquiryBar.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} passHref>
            <Product key={product.id}>
              <DeleteBtn
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  dispatch(removeFromInquiryBar(product.id));
                }}
              >
                <IconWrapper>
                  <MdOutlineClose size={16} color="white" />
                </IconWrapper>
              </DeleteBtn>
              <Img src={product.imgSrc} alt={product.name} />
              <Info>
                <Name>{product.name}</Name>
                <Rent>{formatCurrency(product.rent)}</Rent>
              </Info>
            </Product>
          </Link>
        ))}

        {/* 空的圈圈帶提示 */}
        {emptySlots.map((slotNumber) => (
          <EmptyCircle key={slotNumber}>
            <EmptyCircleText>
              {slotNumber.toString().padStart(2, "0")}
            </EmptyCircleText>
          </EmptyCircle>
        ))}
      </Products>
      <Link href={`/inquiry`} passHref>
        <InquiryBtn
          onClick={(e) => {
            e.preventDefault(); // 阻止瀏覽器的默認行為（例如新分頁開啟）
            if (!e.metaKey && !e.ctrlKey) {
              // 確保不是通過 `Ctrl` 或 `Cmd` 點擊，然後執行路由跳轉
              router.push("/inquiry");
            }
          }}
          onContextMenu={(e) => {
            e.preventDefault(); // 阻止右鍵功能
          }}
        >
          前往詢問單
        </InquiryBtn>
      </Link>
    </BarContainer>
  );
};

export default InquiryBar;
