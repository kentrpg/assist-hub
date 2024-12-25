import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  margin-bottom: 70px;
`;

export const BackButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryBg || "#f9f9f9"};
  border-radius: 10px;
  padding: 20px 24px;
  margin-bottom: 60px;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 20px;
`;

export const InfoCol = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;

  &:last-child {
    flex-grow: 1;
    /* min-width: 120px; */
  }
`;

export const InfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textprimary || "#1d4ed8"};
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
  margin-bottom: 60px;
`;

export const AssistiveWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
`;

export const AssistiveDeviceCard = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 8px;
  padding: 20px;

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
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textprimary};
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
  border-radius: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover || "#003da5"};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryActive || "#002a7c"};
    transform: scale(0.95);
  }
`;
