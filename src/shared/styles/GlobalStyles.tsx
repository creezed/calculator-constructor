import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html,
  body {
    height: 100%;
    font-family: 'Inter',sans-serif;
  }
  
  #root {
    height: 100%;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
