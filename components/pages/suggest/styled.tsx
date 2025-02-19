import { PrimaryButton, buttonGapSizes } from "@/components/ui/buttons/Layout";
import { InputRadius } from "@/styles/borderRadius";
import { Tablet, Mobile } from "@/styles/container";
import { chineseTextStyle } from "@/helpers/format/textFormatting";
import { H6 } from "@/styles/typography";
import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Assistive = styled.div`
  padding: 40px 0 30px 0;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 40px;
`;

export const RecommendationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 24px;

  @media ${Tablet} {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;

  @media ${Mobile} {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 24px;
    column-gap: 16px;
    padding: 24px;
  }
  @media ${Tablet} {
    flex-wrap: nowrap;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 auto;
  max-width: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  row-gap: 10px;
  @media ${Tablet} {
    flex: 0 0 19.22%; /* 204px / 1061px */
    max-width: 19.22%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
  @media ${Mobile} {
    max-width: 130px;
  }
  @media ${Tablet} {
    max-width: 150px;
  }
`;

export const Info = styled.div`
  flex: 0 0 auto;
  max-width: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  @media ${Mobile} {
    width: calc((100% - 1 * 16px) / 2);
    justify-content: start;
  }
  @media ${Tablet} {
    flex: 0 0 51.45%; /* 546px / 1061px */
    max-width: 51.45%;
    justify-content: space-between;
  }
`;

export const Name = styled.h3`
  ${H6};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  ${chineseTextStyle};
`;

export const FeatureList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const RecommendDescription = styled.div`
  flex: 0 0 auto;
  max-width: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  @media ${Mobile} {
    width: calc((100% - 1 * 16px) / 2);
    gap: 12px;
  }
  @media ${Tablet} {
    flex: 0 0 24.79%; /* 263px / 1061px */
    max-width: 24.79%;
  }
`;

export const Reason = styled.textarea`
  flex: 1;
  min-height: 92px;
  ${InputRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding-inline-start: 8px;
  cursor: default;
  resize: none;
  padding: 8px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 4px;
  }
`;

export const RentButton = styled(PrimaryButton)`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${buttonGapSizes.small};

  svg {
    width: 20px;
    height: 20px;
  }
  @media ${Mobile} {
    height: 40px;
    ${buttonGapSizes.medium};
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const FooterTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 40px;
`;
