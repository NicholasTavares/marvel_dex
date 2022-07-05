import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
  }
`;

export default GlobalStyle;