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

  @media (max-width: 1006px) {
    z-index: -1;
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

export const ContentContainer = styled.div`
  @media (max-width: 1006px) {
    padding: 0 0 50px 0;
    border-radius: 5px;
    background-color: #fff;
    position: absolute;
    width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 70px;
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
@media (min-height: 832px) {
   /* TODO: Subir na vercel ( esta na descricao do desafio) */
  .moneyImageBackground{}
}
`;

export default GlobalStyles;
