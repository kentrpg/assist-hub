import { ButtonRadius } from "@/styles/borderRadius";
import { Desktop, Mobile, Tablet } from "@/styles/container";
import { H1, H2, H3, H4, H6 } from "@/styles/typography";
import type { Color } from "@/types/uiProps";
import styled from "styled-components";

export const Card = styled.div<Color>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $color }) => theme.colors[$color]};
  ${ButtonRadius};
  padding: 12px 26px;

  @media ${Mobile} {
    gap: 24px;
    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }

  @media ${Tablet} {
    flex-direction: row;
    padding: 24px 40px;
  }
`;

export const NumberGroup = styled.div`
  display: none;
  @media ${Mobile} {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  @media ${Tablet} {
    gap: 37px;
  }
`;

export const Number = styled.span`
  ${H2};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Divider = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  ${H6};
  @media ${Mobile} {
    ${H4};
  }
  @media ${Tablet} {
    ${H3};
  }
  @media ${Desktop} {
    ${H1};
  }
`;

export const Description = styled.div`
  max-width: 390px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${Tablet} {
    flex-grow: 1;
  }
`;

export const Image = styled.img`
  height: auto;
  object-fit: contain;
  max-height: 120px;

  @media ${Mobile} {
    max-width: 200px;
    max-height: 250px;
  }
  @media ${Tablet} {
    max-width: 100%;
    height: 100%;
    width: auto;
  }
`;
