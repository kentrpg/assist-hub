import styled from "styled-components";
import { H4 } from "@/styles/typography";
import { CardRadius } from "@/styles/borderRadius";
import { ShadowLow } from "@/styles/effect";

export const Container = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Section = styled.section`
  ${CardRadius};
  ${ShadowLow};
  padding: 20px;
  background: ${({ theme }) => theme.colors.secondaryBg};
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  ${H4};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 16px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 12px;
  margin-bottom: 8px;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StatusTag = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ModifyButton = styled.button`
  width: 100%;
  padding: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;
