import { createGlobalStyle } from "styled-components";

import backgroundMoneyImage from "../assets/MaskSVG.svg";

const GlobalStyles = createGlobalStyle` html,
body {
  padding: 0;
  margin: 0;
  background-color: #f6f6f0;
}

header {
  background-color: transparent;
}

.moneyImageBackground {
  pointer-events: none; 
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  margin: 0;

  background-color: transparent;

  height: 1020px;
  width: 1440px;

  background-image: url(${backgroundMoneyImage});
  background-size: inherit;
  background-position: right bottom;
  background-repeat: no-repeat;
}

.graphImage{
  display: block;
  position: relative;
  top: 239px;
  left: 854px;
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

@media (min-height: 1021px) {
  .moneyImageBackground{
    background-size: cover;
    height: 100vh;
    width: 100vw;

    margin: 0;
    padding: 0;
  }

  .graphImage{
    display: none;
  }
}


`;

export default GlobalStyles;
