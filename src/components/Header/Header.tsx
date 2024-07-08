import { HeaderBlock, Link, LogoImg, Navigate, NavigationContainer } from "./Header.styled";
import logo from '../../images/logo.png'
import { Container } from "../../pages/Home.styled";

 const Header = () => {
  return (
    <HeaderBlock>
		<Container>
      <Navigate>
        <Link to="/">
		  <LogoImg
      src={logo}
      alt="logo"
		width={100}
    />
        </Link>
		  <NavigationContainer>
        <Link to="/facts">Факты</Link>
		  <Link to="/recipes">Рецепты</Link>
		  <Link to="/combinations">Сочетания</Link>
		  <Link to="/history">История</Link>
		  </NavigationContainer>
      </Navigate>
		</Container>
    </HeaderBlock>
  );
};

export default Header