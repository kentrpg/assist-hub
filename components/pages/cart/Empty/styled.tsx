import { buttonSizes, SecondaryButton } from "@/components/ui/buttons";
import { Desktop, Mobile, Tablet } from "@/styles/container";
import { HstackLayout } from "@/styles/flex";
import { H6 } from "@/styles/typography";
import styled from "styled-components";
import { PageTitleDescription } from "@/components/ui/titles";

export const Description = styled(PageTitleDescription)`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const List = styled.div`
  flex: 1 1 auto;
  ${HstackLayout};
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0 30px 0;
  @media (${Mobile}) {
    flex-direction: row;
    gap: 30px;
  }
  @media (${Tablet}) {
    gap: 45px;
    padding: 60px 0;
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
  @media (${Mobile}) {
    flex-direction: column;
    &:nth-child(2) {
      flex-direction: column;
    }
  }
  @media (${Tablet}) {
    gap: 12px;
  }
  @media (${Desktop}) {
    gap: 25px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100px;
  @media (${Mobile}) {
    height: 130px;
  }
  @media (${Tablet}) {
    height: 170px;
  }
  @media (${Desktop}) {
    height: 216px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  @media (${Tablet}) {
    ${H6};
  }
`;

export const Button = styled(SecondaryButton)`
  ${buttonSizes.xlarge};
`;
