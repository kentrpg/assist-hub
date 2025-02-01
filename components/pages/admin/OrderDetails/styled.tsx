import styled from "styled-components";
import { H4 } from "@/styles/typography";
import { CardRadius, InputRadius } from "@/styles/borderRadius";
import { ShadowLow, InputFieldTransition } from "@/styles/effect";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Section = styled.section`
  ${CardRadius};
  ${ShadowLow};
  padding: 24px;
  background: ${({ theme }) => theme.colors.secondaryBg};
`;

export const SectionTitle = styled.h2`
  ${H4};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatusTag = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;

export const StaticText = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;
`;

export const Input = styled.input`
  ${InputRadius};
  ${InputFieldTransition};
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled.button.attrs({ type: "submit" })`
  width: 100%;
  padding: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;
