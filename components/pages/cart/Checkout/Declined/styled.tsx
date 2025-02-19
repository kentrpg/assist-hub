import { Mobile } from "@/styles/container";
import { FlexAlignCenter } from "@/styles/flex";
import { H5 } from "@/styles/typography";
import styled from "styled-components";

export const Context = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
`;

export const Title = styled.h1`
  ${H5};
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 12px;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Image = styled.img`
  vertical-align: middle;
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
  }
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
