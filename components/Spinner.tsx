import styled from 'styled-components';

const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #3498db;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: spin 1s ease-in-out infinite
`;

export {Spinner};