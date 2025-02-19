import { buttonSizes, SecondaryButton } from "@/components/ui/buttons/Layout";
import { Desktop, Mobile, Tablet } from "@/styles/container";
import { H6 } from "@/styles/typography";
import styled from "styled-components";
import { TitleDescription } from "@/components/ui/titles";
import { Wrapper20 } from "@/styles/wrappers";

export const Description = styled(TitleDescription)`
  display: none;
  @media ${Mobile} {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  padding: 15px 0;
  @media ${Mobile} {
    flex-direction: row;
  }
  @media ${Tablet} {
    padding: 30px 0;
  }
  @media ${Desktop} {
    padding: 50px 0;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 4px;
  &:nth-child(2) {
    flex-direction: row;
  }
  @media ${Mobile} {
    flex-direction: column;
    &:nth-child(2) {
      flex-direction: column;
    }
  }
  @media ${Tablet} {
    gap: 12px;
  }
  @media ${Desktop} {
    gap: 24px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100px;
  object-fit: contain;

  @media ${Mobile} {
    height: 130px;
  }
  @media ${Tablet} {
    height: 170px;
  }
  @media ${Desktop} {
    height: 216px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  @media ${Mobile} {
  }
  @media ${Tablet} {
    font-size: 18px;
  }
  @media ${Desktop} {
    ${H6};
  }
`;

export const Action = styled(Wrapper20)`
  display: flex;
  justify-content: center;
`;
