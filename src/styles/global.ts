import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 html,
 body {
   padding: 0;
   margin: 0;
   background-color:  #f6f6f0;
 }


 a {
   color: inherit;
   text-decoration: none;
 }


 * {
   font-family: "Roboto", sans-serif;
   font-style: normal;
   box-sizing: border-box;
 }


`;

export default GlobalStyles;
