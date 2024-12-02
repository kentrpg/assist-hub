import styled from 'styled-components';

const MainStyle = styled.main`
  flex-grow: 1;
  /* margin-top: auto;  */
  /* 如果有做 header fixed 的話，要加上這個，避免 Main 被 header 擋住 */
`;

const Main = () => {
  return (
    <MainStyle>main</MainStyle>
  );
};

export {Main};
