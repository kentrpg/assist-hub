import styled from "styled-components";
import { H5 } from "@/styles/typography";
import { Container1344, Mobile, Tablet } from "@/styles/container";

export const Container = styled(Container1344)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 16px;
  @media ${Tablet} {
    flex-direction: row;
    gap: 32px;
  }
`;

export const Image = styled.img`
  height: auto;
  max-width: 300px;
  width: 100%;
  @media ${Mobile} {
    max-width: 350px;
    width: revert-layer;
  }
  @media ${Tablet} {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  gap: 16px;

  @media ${Tablet} {
    gap: 32px;
    flex-shrink: 0;
  }
`;

export const Group = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  ${H5};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 12px;
  span {
    display: inline;
    @media ${Mobile} {
      display: block;
    }
  }
`;
