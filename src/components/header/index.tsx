import logo from "../../assets/Logo.png";
import { BoldTypograph } from "./header.style";
import { useHeader } from "./useHeader";

const Header = () => {
  const { setTeste, teste } = useHeader();
  return (
    <header>
      <h1>
        <a href="google.com">
          <img src={logo} alt="logo" />
        </a>
      </h1>
      <button onClick={() => setTeste("Teste secundario")}>Botao teste</button>
      <BoldTypograph>{teste}</BoldTypograph>
    </header>
  );
};

export default Header;
