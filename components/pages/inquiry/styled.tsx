import { CardRadius } from "@/styles/borderRadius";
import { Mobile, Tablet } from "@/styles/container";
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
  gap: 16px;
  padding: 30px 0;

  @media (${Mobile}) {
    padding: 60px 0;
  }
`;
