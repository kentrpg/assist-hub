import {
  AccentIconButton,
  buttonGapSizes,
} from "@/components/ui/buttons/Layout";
import { InputRadius } from "@/styles/borderRadius";
import { Tablet, Mobile } from "@/styles/container";
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
  padding: 40px 0;
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
  align-items: center;
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
  margin: 0;
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
  gap: 8px;
  @media ${Mobile} {
    width: calc((100% - 1 * 16px) / 2);
    gap: 10px;
  }
  @media ${Tablet} {
    flex: 0 0 24.79%; /* 263px / 1061px */
    max-width: 24.79%;
    gap: 16.5px;
  }
`;

export const Reasons = styled.ul`
  border: 1px solid ${({ theme }) => theme.colors.border};
  ${InputRadius};
  padding: 8px 10px 8px 30px;
`;

export const Reason = styled.li`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: list-item;
  list-style-type: "•";
  padding-inline-start: 6px;
`;

export const RentButton = styled(AccentIconButton)`
  ${buttonGapSizes.small};
  width: 100%;
  svg {
    width: 20px;
    height: 20px;
  }
  @media ${Mobile} {
    ${buttonGapSizes.medium};
    svg {
      width: 24px;
      height: 24px;
    }
  }
  @media ${Tablet} {
    width: inherit;
  }
`;

export const FooterTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
