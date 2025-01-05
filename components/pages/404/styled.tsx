import styled from "styled-components";
import { PrimaryButton, buttonSizes } from "@/components/ui/buttons";
import { H5 } from "@/styles/typography";
import { Container1021, Mobile, Tablet } from "@/styles/container";

export const Container = styled(Container1021)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media (${Mobile}) {
    flex-direction: row;
  }
  @media (${Tablet}) {
    gap: 32px;
  }
`;

export const Image = styled.img`
  height: auto;
  max-width: 300px;
  @media (${Mobile}) {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media (${Tablet}) {
    gap: 32px;
  }
`;

export const Title = styled.h1`
  ${H5};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error};
`;

export const Button = styled(PrimaryButton)`
  font-size: 18px;
  ${buttonSizes.xlarge};
`;
