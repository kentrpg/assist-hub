import { ButtonRadius } from "@/styles/borderRadius";
import { Desktop, Mobile, Tablet } from "@/styles/container";
import { H1, H2, H3, H4, H5, H6 } from "@/styles/typography";
import type { ColorsType } from "@/types/uiProps";
import styled from "styled-components";

export const CardWrapper = styled.div<{ $bgColor: ColorsType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor]};
  ${ButtonRadius};
  padding: 12px 26px;

  @media (${Mobile}) {
    gap: 24px;
    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }

  @media (${Tablet}) {
    flex-direction: row;
    padding: 24px 40px;
  }
`;

export const NumberGroup = styled.div`
  /* display: none; */
  /* @media (${Mobile}) {
    display: flex;
    align-items: center;
    gap: 16px;
  } */
  display: flex;
  align-items: center;
  gap: 16px;
  @media (${Tablet}) {
    gap: 37px;
  }
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  ${H5};
  @media (${Mobile}) {
    ${H4};
  }
  @media (${Tablet}) {
    ${H2};
  }
`;

export const Divider = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  ${H6};
  @media (${Mobile}) {
    ${H4};
  }
  @media (${Tablet}) {
    ${H3};
  }
  @media (${Desktop}) {
    ${H1};
  }
`;

export const Description = styled.div`
  max-width: 390px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (${Tablet}) {
    flex-grow: 1;
  }
`;

export const Image = styled.img`
  height: auto;
  object-fit: contain;
  max-height: 120px;

  @media (${Mobile}) {
    max-width: 200px;
    max-height: inherit;
  }
  @media (${Tablet}) {
    max-width: 100%;
    height: 100%;
    width: auto;
  }
`;

export const ImageWrapper = styled.div`
  font-size: 0;
`;
