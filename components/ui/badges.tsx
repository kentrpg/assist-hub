import styled from "styled-components";

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 500;
  border-radius: 5px;
  white-space: nowrap;
  padding: 3px 8px;
`;

export const PriceBadge = styled(Badge)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const FeatureBadge = styled(Badge)`
  border: 1px solid ${({ theme }) => theme.colors.textMuted};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const OrderStatusBadge = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  white-space: nowrap;
  padding: 5px 10px;
`;

export const PaidBadge = styled(OrderStatusBadge)`
  border: 1px solid ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.success};
`;

export const ClosedBadge = styled(OrderStatusBadge)`
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  color: ${({ theme }) => theme.colors.grey200};
`;

export const PendingBadge = styled(OrderStatusBadge)`
  border: 1px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
`;

export const OngoingBadge = styled(OrderStatusBadge)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;
