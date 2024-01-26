import { Link } from "react-router-dom";
import { Nav } from "./styled";
import Logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <Nav>
      <img src={Logo} alt="Logo" title="Logo Pet" />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/register">
          <li>Cadastrar Pet</li>
        </Link>

        <li>Quem Somos</li>
      </ul>
    </Nav>
  );
}
