import { Link, Navigate } from "./Header.styled";
import logo from '../../images/logo.png'

 const Header = () => {
  return (
    <header>
      <Navigate>
        <Link to="/" end>
		  <img
      src={logo}
      alt="logo"
		width={100}
    />
        </Link>
        <Link to="/facts">Факты</Link>
		  <Link to="/recipes">Рецепты</Link>
		  <Link to="/combinations">Сочетания</Link>
		  <Link to="/history">История</Link>
      </Navigate>
    </header>
  );
};

export default Header