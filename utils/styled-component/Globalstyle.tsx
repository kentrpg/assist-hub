import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    min-height: 100dvh;
    margin: 0;
    padding: 0;
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

  address {
    font-style: normal;
    unicode-bidi: normal;
  }

  input {
    border-radius: 0;
    &[type="search"] {
      appearance: none;
      border-radius: 0;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.white} inset;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    appearance: none;
  }
  
  a, button, input {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, div, span, p {
    cursor: default;
  }
  
  /* a, label, button, select, textarea {
    cursor: pointer;
    & * {
      cursor: pointer;
    }
  } */

  h1 {
    font-size: 40px;
    font-weight: 400;
  }
`;

export default GlobalStyle;
