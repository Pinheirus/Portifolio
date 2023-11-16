import { HeaderContainer } from "./styles";
import LogoPortifólio from "../../assets/Logo-Portifólio.svg"; 

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoPortifólio} alt="" />
      </span>
      <nav>
        <a href="/Experiencia">Experiencia</a>
        <a href="/Formação">Formação</a>
        <a href="/Contato">Contato</a>
      </nav>
    </HeaderContainer>
  );
}
