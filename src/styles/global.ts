import { createGlobalStyle, styled } from "styled-components";

import backgroundMoneyImage from "../assets/MaskSVG.svg";

export const MoneyImageBackground = styled.div`
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

  @media (min-height: 1021px) {
    background-size: cover;
    height: 100vh;
    width: 100vw;

    margin: 0;
    padding: 0;
  }
`;

export const GraphImage = styled.img`
  display: block;
  position: relative;
  top: 239px;
  left: 854px;

  @media (min-height: 1021px) {
    display: none;
  }
`;

const GlobalStyles = createGlobalStyle` html,
body {
  padding: 0;
  margin: 0;
  background-color: #f6f6f0;
}

header {
  background-color: transparent;
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
