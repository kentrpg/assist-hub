import styled from "styled-components";
import { Container1344 } from "@/styles/container";
import { Tablet, Desktop, Mobile, ExtraLarge } from "@/styles/container";

export const Container = styled(Container1344)`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  @media (${Tablet}) {
    flex-direction: row;
    column-gap: 40px;
  }
  @media (${ExtraLarge}) {
    column-gap: 72px;
  }
`;
