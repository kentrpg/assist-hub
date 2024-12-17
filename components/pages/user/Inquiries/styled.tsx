import styled from "styled-components";
interface ButtonProps {
  $isSuggest?: boolean;
}

export const InquiryContainer = styled.div`
  flex: 1;
  padding: 48px;
  border-radius: 10px;
  outline: 1px #888888 solid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const InquiryTitle = styled.h5`
  font-size: 24px;
  color: #08204d;
  border-left: 5px #103f99 solid;
  padding: 0px 14px;
  margin-bottom: 24px;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  outline: 1px #888888 solid;
`;
export const Thead = styled.thead`
  background-color: #cfd9eb;
  padding: 10px 25px;
  font-size: 12px;
  color: #08204d;
`;
export const TableHeadTr = styled.tr`
  display: flex;
  column-gap: 16px;
`;
export const NumberHeader = styled.th`
  min-width: 126px;
`;

export const ProductsHeader = styled.th`
  min-width: 290px;
`;

export const OthersHeader = styled.th`
  min-width: 90px;
`;

export const Tbody = styled.tbody`
  padding: 24px 25px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e9e5de;
  }
  &:last-of-type::after {
    content: none;
  }
`;

export const TableBodyTr = styled.tr`
  display: flex;
  column-gap: 16px;
`;

export const ProductId = styled.td`
  min-width: 126px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Products = styled.td`
  min-width: 290px;
  display: flex;
`;

export const CreationDate = styled.td`
  min-width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Status = styled.td<ButtonProps>`
  min-width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $isSuggest }) => ($isSuggest ? "#2ECC71" : "#E74C3C")};
`;

export const InquiryLink = styled.td`
  min-width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SuggestionLink = styled.td`
  min-width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
