import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px 50px;
    background: #11011e;
    overflow-x:hidden;
    color:white;
    font-family: 'Roboto', sans-serif;

     @media (max-width: 768px) {
      padding:0px 10px;
  }
  }
`;

export default GlobalStyle;
