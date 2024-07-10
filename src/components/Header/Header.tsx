import {
  HeaderBlock,
  Link,
  LogoImg,
  Navigate,
  NavigationContainer,
} from './Header.styled'
import logo from '../../images/logo.png'
import { Container } from '../../pages/Home.styled'

const Header = () => {
  return (
    <HeaderBlock>
      <Container>
        <Navigate>
          <Link to='/'>
            <LogoImg src={logo} alt='logo' width={100} />
          </Link>
          <NavigationContainer>
            <Link to='/facts'>Facts</Link>
            <Link to='/recipes'>Recipes</Link>
            <Link to='/combinations'>Combinations</Link>
            <Link to='/history'>History</Link>
          </NavigationContainer>
        </Navigate>
      </Container>
    </HeaderBlock>
  )
}

export default Header
