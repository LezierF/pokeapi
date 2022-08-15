import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;


  scroll-behavior: smooth;
}

html{
  height: 100%;
}

body {
  overflow-x: hidden;
  height: 100%;
}

#root{
  height: 100%;
}

`;
