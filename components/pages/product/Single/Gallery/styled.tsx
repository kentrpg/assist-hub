import styled from "styled-components";
import { Mobile } from "@/styles/container";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoImage = styled.img`
  width: 100%;
  height: 100%;
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
