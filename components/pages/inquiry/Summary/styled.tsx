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
  flex-direction: column;
  flex-wrap: wrap;
  gap: 18px;
  @media ${Mobile} {
    flex-direction: row;
  }
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
`;

export const Additionalinfo = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  word-break: break-word;
  width: 100%;
`;

export const Label = styled.span`
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
