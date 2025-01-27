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

  select {
    appearance: none;
  }

  address {
    font-style: normal;
    unicode-bidi: normal;
  }

  button, input, select, textarea {
    border: none;
    outline: none;
    border-radius: 0;
    line-height: inherit;
  }

  h1, h2, h3, h4, h5, h6, div, span, p {
    cursor: default;
  }

  input {
    &[type="checkbox"], &[type="radio"], &[type="date"] {
      cursor: pointer;
      appearance: none;
    }

    &:-webkit-autofill {
      ${CleanAutofill};
    }
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
`;

export default GlobalStyle;
