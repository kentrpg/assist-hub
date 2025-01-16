import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  border: 1px solid #e9e5de;
  border-radius: 5px;
  overflow: hidden;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-size: 18px;
  font-weight: 400;
  background-color: #f9f8f6;
  cursor: pointer;

  &:hover {
    background-color: #e9e5de;
  }
`;

export const AccordionContent = styled.div`
  padding: 12px 16px;
  background-color: #fff;
  color: #333;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
