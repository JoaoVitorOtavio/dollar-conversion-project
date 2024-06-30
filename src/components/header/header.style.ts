import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 64px 0 0 64px;

  @media (max-width: 805px) {
    flex-direction: column;
    margin: 50px 0 0 0;
  }
`;

export const DateAndDescriptionContainer = styled.div`
  margin-left: 48px;

  @media (max-width: 805px) {
    margin: 25px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 555px) {
    text-align: center;
  }
`;

export const DateSeparator = styled.span`
  margin: 0 15px;
`;

export const BoldTypography = styled.b`
  color: #45505e;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
`;

export const Description = styled.p`
  color: #8c9cad;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;
