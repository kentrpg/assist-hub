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
  text-align: center;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 270px;
  height: 320px;
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
  gap: 24px;
  padding: 20px 0;
`;
