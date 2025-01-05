import { CleanAutofill } from "@/styles/effect";
import { FontFamily, NotoSansTC } from "@/fonts";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    min-height: 100dvh;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    ${FontFamily};
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
    &[type="search"] {
      appearance: none;
      border-radius: 0;
    }

    &[type="checkbox"], &[type="radio"] {
      cursor: pointer;
    }

    &:-webkit-autofill {
      ${CleanAutofill};
    }
  }

  button, input {
    border: none;
    outline: none;
    border-radius: 0;
    line-height: inherit;
  }

  h1, h2, h3, h4, h5, h6, div, span, p {
    cursor: default;
  }

  a, label, button, select, textarea {
    cursor: pointer;
    & * {
      cursor: pointer;
    }
  }

  input,
  button,
  p,
  span,
  a,
  textarea,
  select {
    ${NotoSansTC};
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    appearance: none;
  }

  h1 {
    font-size: 40px;
    font-weight: 400;
  }
`;

export default GlobalStyle;
