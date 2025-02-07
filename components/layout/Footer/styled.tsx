import styled from "styled-components";
import Link from "next/link";
import { Mobile, Tablet } from "@/styles/container";
import { Container1344 } from "@/styles/container";
// TBD: 待評估響應式移除 Newsletter 區塊是否合理，否則背景高度要改為 520px

export const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.grey100};
  position: relative;
  padding-bottom: 20px;
  margin-top: 90px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -115px;
    height: 168px;
    background-image: url("/images/wave375.webp");
    background-repeat: repeat-x;
    background-position: top;
    background-size: 100% 100%;
    @media ${Mobile} {
      top: -110px;
      background-image: url("/images/wave768.webp");
    }
    @media ${Tablet} {
      top: -130px;
      background-image: url("/images/wave1920.webp");
    }
  }
`;

export const Container = styled(Container1344)`
  z-index: 1;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
  color: ${({ theme }) => theme.colors.grey300};
  @media ${Tablet} {
    gap: 16px;
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const Categories = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  @media ${Mobile} {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  @media ${Tablet} {
    grid-column: 1 / 5;
  }
`;

export const Contact = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  @media ${Mobile} {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  @media ${Tablet} {
    grid-column: 6 / 9;
    grid-row: 1 / 3;
  }
`;

export const Newsletter = styled.div`
  display: block;
  grid-column: 1 / 3;
  grid-row: 3 / 3;
  @media ${Mobile} {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  @media ${Tablet} {
    grid-column: 10 / 13;
    grid-row: 1 / 3;
  }
`;

export const Title = styled.span`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 4px;
  @media ${Mobile} {
    margin-bottom: 10px;
  }
`;

export const CategoryLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  column-gap: 8px;
  row-gap: 6px;
  @media ${Mobile} {
    gap: 10px;
    flex-direction: column;
  }
  @media ${Tablet} {
    gap: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
  }
`;

export const CategoryLink = styled(Link)`
  color: ${({ theme }) => theme.colors.grey300};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const AddressInfo = styled.address`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media ${Mobile} {
    gap: 10px;
  }
  @media ${Tablet} {
    gap: 16px;
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SubscriptionField = styled.div`
  max-width: 260px;
  position: relative;
  margin-bottom: 8px;
  @media ${Mobile} {
    margin-top: 0;
    margin-bottom: 10px;
  }
  @media ${Tablet} {
    margin-bottom: 16px;
  }
`;

export const Copyright = styled.p`
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-top: 20px;
  @media ${Mobile} {
    margin-top: 28px;
    text-align: right;
  }
`;

export const Image = styled.img`
  object-fit: contain;
`;
