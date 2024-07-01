import logo from "../../assets/Logo.png";
import {
  BoldTypography,
  Description,
  Header as HeaderContainer,
  DateAndDescriptionContainer,
  DateSeparator,
} from "./header.style";
import { useHeader } from "./useHeader";

const Header = () => {
  const { currentDate, currentTime } = useHeader();

  return (
    <HeaderContainer>
      <a>
        <img src={logo} alt="logo" />
      </a>
      <DateAndDescriptionContainer>
        <BoldTypography>
          {currentDate}
          <DateSeparator>|</DateSeparator>
          {currentTime} UTC
        </BoldTypography>
        <Description>
          Dados de câmbio disponibilizados pela Morningstar.
        </Description>
      </DateAndDescriptionContainer>
    </HeaderContainer>
  );
};

export default Header;
