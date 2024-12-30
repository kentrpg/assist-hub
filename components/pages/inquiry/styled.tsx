import { CardRadius } from "@/styles/borderRadius";
import { Desktop, Mobile, Tablet } from "@/styles/container";
import { H5, H6 } from "@/styles/typography";
import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const InfoWrapper = styled.div`
  padding: 30px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  ${CardRadius};
  padding: 20px 24px;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  @media (${Mobile}) {
    flex-direction: row;
  }
`;

export const InfoCol = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  // TBD: 需要補設計 flex+max-width 方式需要針對六種行動評估都測試出合適的 max-width 避免空白空間過大
  &:first-child {
    flex-shrink: 0;
    max-width: 211px;
  }

  &:last-child {
    flex-grow: 1;
    word-break: break-word;
  }
`;

export const InfoLabel = styled.span`
  min-width: 64px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  white-space: nowrap;
  margin-right: 16px;
`;

export const InfoValue = styled.span`
  font-size: 16px;
  word-break: break-word;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px 2px 12px 16px;
`;

export const Assistive = styled.div`
  padding: 30px 0;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 40px;
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
  @media (${Tablet}) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  flex: 0 0 calc((100% - 2 * 24px) / 3);
  text-align: left;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.white};
  ${CardRadius};
  padding: 20px;
  &:nth-child(3n + 1) {
    background: ${({ theme }) => theme.colors.accentLight};
    border-color: ${({ theme }) => theme.colors.accent};
  }
  &:nth-child(3n + 2) {
    background: ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &:nth-child(3n + 3) {
    background: ${({ theme }) => theme.colors.seccondaryLight};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
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

export const ImageWrapper = styled.div`
  font-size: 0;
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

// for not-found page
export const TitleGroup = styled.div`
  text-align: center;
  padding: 20px 0 12px;
`;

export const TitleDescription = styled.p`
  font-size: 18px;
  margin-top: 12px;
`;

export const InquiryStep = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 16px;
  padding: 30px 0;

  @media (${Mobile}) {
    padding: 60px 0;
  }
`;
