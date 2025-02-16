import { CardRadius, InputRadius } from "@/styles/borderRadius";
import { Tablet } from "@/styles/container";
import {
  CardOpacityTransition,
  OutlineColorTransition,
  ShadowMedium,
} from "@/styles/effect";
import { AccentIconButton } from "@/styles/link";
import { IsActive, IsCompleted, IsDisabled } from "@/types/uiProps";
import styled, { css } from "styled-components";

export const Product = styled.div<IsActive>`
  position: relative;
  ${CardOpacityTransition};
  opacity: 0.3;

  ${({ $isActive }) =>
    $isActive
      ? css`
          opacity: 1;
        `
      : css`
          &:hover {
            cursor: pointer;
            opacity: 0.6;
          }
        `};
`;

export const Card = styled.div<{ $isParentActive: boolean }>`
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  ${CardRadius};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  pointer-events: none;

  ${({ $isParentActive }) =>
    $isParentActive &&
    css`
      & > * {
        pointer-events: auto;
      }
    `}
`;

export const CardGap = css`
  gap: 20px;
`;

const gridTemplate = css`
  display: grid;
  grid-template-columns:
    minmax(300px, 560px)
    minmax(auto, 80px)
    minmax(auto, 80px)
    minmax(84px, 114px);
  ${CardGap};
`;

export const Header = styled.div`
  ${gridTemplate};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 24px;
`;

export const HeaderCell = styled.div`
  font-size: 12px;
`;

export const CardContent = styled.div`
  ${gridTemplate};
  position: relative;
  padding: 24px;
`;

export const ProductInfo = styled.div`
  display: flex;
  ${CardGap};
  grid-column: 1;
  width: 100%;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: calc(100% - 100px);
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  grid-column: auto;
`;

export const PriceLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PriceValue = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  grid-column: 4;
`;

export const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  ${InputRadius};

  svg {
    width: 24px;
    height: 24px;
    ${InputRadius};
    color: ${({ theme }) => theme.colors.textSecondary};
    z-index: 1;
  }

  &:not(:disabled) {
    svg {
      &:hover {
        background-color: ${({ theme }) => theme.colors.grey200};
      }
    }
  }

  &:disabled {
    opacity: 0.5;

    svg {
      color: ${({ theme }) => theme.colors.textMuted};
      cursor: not-allowed;
    }
  }
`;

export const QuantityValue = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Rental = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px 24px;
  flex-direction: column;
  align-items: end;

  @media ${Tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

export const RentalGroup = styled.div`
  display: flex;
  gap: 24px;
`;

export const RentalAction = styled.div<IsDisabled>`
  display: flex;
  align-items: center;
  gap: 12px;
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
      cursor: not-allowed;
    `};
`;

export const RentalLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: default;
`;

export const RentalSelect = styled.select`
  width: 82px;
  padding: 4px 10px;
  ${InputRadius};
  outline: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 16px;
  font-weight: 500;
  ${OutlineColorTransition};

  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Period = styled.div`
  position: relative;
`;

export const SelectArrowIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
`;

export const RentalDate = styled.div`
  display: flex;
  padding: 4px 10px 4px 10px;
  margin: 0 2px;

  & > *:nth-child(2) {
    margin-right: 4px;
  }

  & > *:last-child {
    margin-left: 1px;
  }
`;

export const DateInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & * {
    cursor: pointer;
  }
`;

export const RentalDateInput = styled.input<IsCompleted>`
  position: absolute;
  width: 100%;
  outline: 1px solid ${({ theme }) => theme.colors.border};
  ${({ $completed }) =>
    $completed &&
    css`
      outline-color: ${({ theme }) => theme.colors.error};
    `}
  ${InputRadius};
  ${OutlineColorTransition};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5px 10px 5px 12px;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
`;

export const RentalText = styled.span`
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textMuted};
  pointer-events: none;
  padding-right: 4px;
`;

export const RentalInputWrapper = styled.div`
  display: flex;
  position: relative;
  pointer-events: none;
  font-size: 0;
`;

export const DateIcon = styled.div`
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 1;
`;

export const RentalSummaryAmount = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.primaryBg};
  padding: 16px 24px;
`;

export const ProductRemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Checkout = styled.div`
  display: flex;
  align-items: end;
  gap: 24px;
`;

export const CheckoutNotice = styled.p`
  text-align: end;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 7px;
`;

export const CheckoutNoticeSpan = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.error};
`;

export const CheckoutActive = styled.div<IsDisabled>`
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};
`;

export const CheckoutButton = styled(AccentIconButton)<IsDisabled>`
  ${ShadowMedium};

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.3;
    `};
`;
