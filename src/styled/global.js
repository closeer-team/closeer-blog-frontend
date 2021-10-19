import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    min-height: 100vh;
    font-family: "Inter", sans-serif;
  }
`;

export default GlobalStyle;
