import logo from "../../assets/Logo.png";
import { BoldTypograph, Description } from "./header.style";
import { useHeader } from "./useHeader";

const Header = () => {
  const { setTeste, teste } = useHeader();
  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "64px 0 0 64px",
        }}
      >
        <a href="google.com">
          <img src={logo} alt="logo" />
        </a>
        <div style={{ marginLeft: "50px" }}>
          <BoldTypograph>
            14 de janeiro<span style={{ margin: "0 15px" }}>|</span>21:00 UTC
          </BoldTypograph>
          <Description>
            Dados de câmbio disponibilizados pela Morningstar.
          </Description>
        </div>
      </div>
    </header>
  );
};

export default Header;
