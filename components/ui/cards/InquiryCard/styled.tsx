import { CardRadius } from "@/styles/borderRadius";
import { Desktop, Tablet } from "@/styles/container";
import { H5, H6 } from "@/styles/typography";
import type { Color } from "@/types/uiProps";
import styled from "styled-components";

export const Card = styled.div<Color>`
  flex: 0 0 calc((100% - 2 * 24px) / 3);
  border: 1px solid transparent;
  ${CardRadius};
  background: ${({ theme, $color }) =>
    $color ? theme.colors[`${$color}Light`] : theme.colors.white};
  border-color: ${({ theme, $color }) => theme.colors[$color]};
  padding: 20px;
  @media (${Tablet}) {
    text-align: center;
  }
  @media (${Desktop}) {
    text-align: left;
  }
`;

export const FlexFullHeight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  margin-bottom: 16px;
  @media (${Tablet}) {
    flex-direction: column;
  }
  @media (${Desktop}) {
    flex-direction: row;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  ${H6};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 4px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Price = styled.p`
  ${H5};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const PriceUnit = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: 4px;
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
  min-width: 135px;
  object-fit: contain;
`;

export const Features = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.textMuted};
  padding: 16px 0;
`;

export const FeatureTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 16px;
`;

export const FeatureGroup = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 16px;
  @media (${Tablet}) {
    flex-direction: column;
    justify-content: center;
  }
  @media (${Desktop}) {
    align-items: start;
  }
`;

export const Feature = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  @media (${Tablet}) {
    gap: 16px;
  }
`;
