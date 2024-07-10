import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Container } from '../../pages/Home.styled'

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </>
  )
}
