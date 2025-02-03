import { Mobile } from "@/styles/container";
import { FlexAlignCenter } from "@/styles/flex";
import { H5 } from "@/styles/typography";
import styled from "styled-components";

export const Context = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  ${H5};
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: 12px;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 60px;
`;

export const Image = styled.img`
  /* width: 270px;
  height: 320px; */
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Mark = styled.strong`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Group = styled(FlexAlignCenter)`
  flex-direction: column;
  text-align: center;
  gap: 12px;
  padding: 20px 0;

  @media ${Mobile} {
    flex-direction: row;
    gap: 24px;
  }
`;
