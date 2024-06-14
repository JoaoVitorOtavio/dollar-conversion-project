import { createGlobalStyle } from "styled-components";
import backgroundMoneyImage from "../assets/MaskSVG.svg";

const GlobalStyles = createGlobalStyle` html,
body {
  padding: 0;
  margin: 0;
  background-color: #f6f6f0;
}

.moneyImageBackground {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  margin: 0;

  background-color: transparent;

  height: 100vh;
  width: 100%;

  background-image: url(${backgroundMoneyImage});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
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
