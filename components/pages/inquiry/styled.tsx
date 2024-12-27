import { ButtonRadius, CardRadius } from "@/styles/borderRadius";
import { Mobile, Tablet, Desktop } from "@/styles/container";
import {
  ButtonScale,
  ButtonShadow,
  ButtonShadowTransition,
} from "@/styles/effect";
import { H5, H6 } from "@/styles/typography";
import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  text-align: center;
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
  color: ${({ theme }) => theme.colors.textprimary};
  white-space: nowrap;
  margin-right: 16px;
`;

export const InfoValue = styled.span`
  font-size: 16px;
  word-break: break-word;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px 2px 12px 16px;
`;

export const InquiryActions = styled.div`
  display: flex;
  justify-content: center;
`;

export const Assistive = styled.div`
  padding: 30px 0;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textprimary};
  margin-bottom: 40px;
`;

export const AssistiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
  @media (${Tablet}) {
    flex-direction: row;
  }
`;

export const AssistiveDeviceCard = styled.div`
  flex: 0 0 calc((100% - 2 * 24px) / 3);
  text-align: left;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.white};
  ${CardRadius};
  padding: 20px;
  // TBD: 需要補成 123 的餘數設計
  &:nth-child(1) {
    background: ${({ theme }) => theme.colors.accentLight};
    border-color: ${({ theme }) => theme.colors.accent};
  }
  &:nth-child(2) {
    background: ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &:nth-child(3) {
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

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 16px;
  @media (${Tablet}) {
    flex-direction: column;
  }
  @media (${Desktop}) {
    flex-direction: row;
  }
`;

export const DeviceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (${Desktop}) {
    flex-shrink: 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeviceTitle = styled.h3`
  ${H6};
  color: ${({ theme }) => theme.colors.textprimary};
  margin-bottom: 4px;
`;

export const DeviceSubtitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textsecondary};
`;

export const Price = styled.p`
  ${H5};
  color: ${({ theme }) => theme.colors.textprimary};
`;

export const PriceUnit = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textsecondary};
  margin-left: 4px;
`;

export const ImageWrapper = styled.div`
  font-size: 0;
`;
export const DeviceImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 160px;
  display: inline-block;
  object-fit: contain;
`;

export const Feature = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.textMuted};
  padding: 16px 0;
`;

export const FeatureTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textsecondary};
  margin-bottom: 16px;
`;

export const FeatureList = styled.ul`
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

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textsecondary};
  @media (${Tablet}) {
    gap: 16px;
  }
`;

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  ${ButtonRadius};
  ${ButtonShadowTransition};

  &:hover {
    ${ButtonShadow};
  }

  &:active {
    transform: ${ButtonScale};
  }
`;
