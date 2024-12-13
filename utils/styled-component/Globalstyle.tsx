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

  a {
    display: inline-block;
    text-decoration: none;
    color: black;
    appearance: none;
  }
  
  a, button, input {
    cursor: pointer;
  }
  
  /* a, label, button, select, textarea {
    cursor: pointer;
    & * {
      cursor: pointer;
    }
  } */

  input {
    border-radius: 0;
    &[type="search"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.white} inset;
    }
  }
  
  h1, h2, h3, h4, h5, h6, div, span, p {
    cursor: default;
  }

  h1 {
    font-size: 40px;
    font-weight: 400;
  }
`;

export default GlobalStyle;
