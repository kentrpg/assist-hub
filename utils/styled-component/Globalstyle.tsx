import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100dvh;
  }

  #__next {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }

  body {
    line-height: 1.5;
  }

  ol, ul {
    list-style: none;
  }

  a, button, input {
    cursor: pointer;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  // cursor override
  h1, h2, h3, h4, h5, h6, div, span, p {
    cursor: default;
  }

  a, label, button, select, textarea {
    cursor: pointer;
    & * {
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
