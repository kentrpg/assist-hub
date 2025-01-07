import { CardRadius, InputRadius } from "@/styles/borderRadius";
import { Mobile, Tablet } from "@/styles/container";
import { H4, H6 } from "@/styles/typography";
import styled, { css } from "styled-components";

export const Title = styled.h1`
  text-align: center;
  ${H6};
  ${InputRadius};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 10px;
  @media (${Tablet}) {
    ${H4};
  }
`;

export const OrderForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 20px 0;
  @media (${Tablet}) {
    grid-template-columns: minmax(334px, auto) minmax(362px, 456px);
  }
`;

const Section = css`
  display: grid;
  ${CardRadius};
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 20px;
  @media (${Tablet}) {
    padding: 24px;
  }
`;

export const Shipping = styled.section`
  ${Section};
  gap: 16px;
  grid-column: 1 / -1;
  grid-row: auto;

  @media (${Tablet}) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

export const Payment = styled.section`
  ${Section};
  gap: 20px;
  grid-column: 1 / -1;
  grid-row: auto;

  @media (${Tablet}) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

export const Summary = styled.section`
  ${Section};
  gap: 16px;
  grid-column: 1 / -1;
  grid-row: auto;

  @media (${Tablet}) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    align-self: start;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  ${CardRadius};
  margin-bottom: 20px;
`;

export const ShippingInfo = styled.div`
  display: grid;
  gap: 16px;
`;

export const PickupMethod = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export const PickupLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const PickupRadio = styled.div`
  display: flex;
  gap: 24px;
`;

export const PickupInfo = styled.ul`
  /* margin-top: 6px; */
`;

export const PickupInfoItem = styled.li`
  font-size: 16px;

  & + & {
    margin-top: 4px;
  }
`;

export const Recipient = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 1 100%;
  &:last-child {
    flex: 1 1 100%;
  }
  @media (${Mobile}) {
    flex: 1 1 calc(50% - 8px);
  }

  &:last-child {
    flex: 1 1 100%;
  }
`;

export const Label = styled.label<{ required?: boolean }>`
  font-size: 16px;
  ${({ theme }) =>
    `&::after {
      content: '*';
      color: ${theme.colors.error};
    }
  `}
`;

export const PaymentOptions = styled.div`
  display: grid;
  gap: 20px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 16px;
  @media (${Mobile}) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
    border-bottom: none;
    padding: 16px 5px;
  }
  @media (${Tablet}) {
    padding: 21px 5px;
  }
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 11px;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ProductLabel = styled.span`
  width: 50%;
  font-size: 14px;
`;

export const ProductValue = styled.span`
  width: 50%;
  text-align: end;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Costs = styled.ul`
  ${CardRadius};
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

export const Cost = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  & + & {
    margin-top: 10px;
  }
`;

export const TotalCost = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  ${H6};
  padding-top: 16px;
`;

export const Term = styled.div`
  margin-top: 16px;
  @media (${Tablet}) {
    margin-top: 48px;
  }
`;

export const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
`;

export const CheckboxItem = styled.div`
  display: grid;
  gap: 4px;
`;

export const CheckoutAction = styled.div`
  display: grid;
`;
