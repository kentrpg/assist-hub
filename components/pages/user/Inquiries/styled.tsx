import styled from "styled-components";

export const InquiryContainer = styled.div`
  flex: 1;
  padding: 48px;
  border-radius: 10px;
  outline: 1px #888888 solid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h5`
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
  background-color: #e7ecf5;
  padding: 10px 25px;
  font-size: 12px;
  color: #08204d;
  box-shadow: 0px 1px 0px 0px #888888; /* 下方線條 */
`;

export const Tr = styled.tr`
  display: flex;
  column-gap: 16px;
`;

export const IdHeader = styled.th`
  max-width: 126px;
  width: 100%;
`;

export const ProductHeader = styled.th`
  max-width: 290px;
  width: 100%;
`;

export const CreatedHeader = styled.th`
  max-width: 90px;
  width: 100%;
`;

export const StatusHeader = styled.th`
  max-width: 90px;
  width: 100%;
`;

export const InquiryHeader = styled.th`
  max-width: 90px;
  width: 100%;
`;

export const SuggestHeader = styled.th`
  max-width: 90px;
  width: 100%;
`;
