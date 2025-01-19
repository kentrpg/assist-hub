import { CardRadius } from "@/styles/borderRadius";
import { Mobile } from "@/styles/container";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  ${CardRadius};
  padding: 20px 24px;
`;

export const Group = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  @media ${Mobile} {
    flex-direction: row;
  }
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  &:first-child {
    flex-shrink: 0;
    max-width: 211px;
  }

  &:last-child {
    flex-grow: 1;
    word-break: break-word;
  }
`;

export const Label = styled.span`
  min-width: 64px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  white-space: nowrap;
  margin-right: 16px;
`;

export const Value = styled.span`
  font-size: 16px;
  word-break: break-word;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px 2px 12px 16px;
`;
