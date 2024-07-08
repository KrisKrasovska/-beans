import { Outlet } from 'react-router-dom'
import { Suspense } from 'react';
import Header from '../Header/Header';
import { Container } from '../../pages/Home.styled';
import Footer from '../Footer/Footer';

export const Layout = () => {
  return (
    <Container>
		<Header />
		<main>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
		</main>
		<Footer />
    </Container>
  );
};