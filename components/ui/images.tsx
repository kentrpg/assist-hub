import { CardRadius } from "@/styles/borderRadius";
import { Mobile, Tablet } from "@/styles/container";
import Link from "next/link";
import styled from "styled-components";

// Remove image bottom gap
export const ImageWrapper = styled.div`
  font-size: 0;
  text-align: center;
`;

export const ImageLink = styled(Link)`
  font-size: 0;
`;

export const CheckoutImage = styled.img`
  width: auto;
  height: auto;
  max-height: 100px;
  max-width: 100px;
  ${CardRadius};
  @media (${Mobile}) {
    max-height: 100px;
    max-width: 100px;
  }
  @media (${Tablet}) {
    max-height: 130px;
    max-width: 130px;
  }
`;
