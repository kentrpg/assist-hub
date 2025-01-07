import styled from "styled-components";
import {
  ExtraLarge,
  Mobile,
} from "@/styles/container";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 15px;
`;

export const Main = styled.div`
  background-color: #f9f8f6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media (${Mobile}) {
    padding: 40px;
  }
  @media (${ExtraLarge}) {
    padding: 114px;
  }
`;

export const InfoImage = styled.img`
  max-width: 456px;
  max-height: 456px;
  width: 100%;
  object-fit: cover;
`;

export const Thumbnail = styled.div`
  display: flex;
  column-gap: 12px;
  img {
    width: 50px;
    height: 50px;
    @media (${Mobile}) {
      width: 78px;
      height: 78px;
    }
  }
`;
