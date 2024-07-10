import React, { FC } from 'react'
import './App.css'
import { theme } from './utils/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Layout } from './components/Layout/Layout'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify'
import Facts from './pages/Facts'
import Recipes from './pages/Recipes'
import Combinations from './pages/Combinations'
import History from './pages/History'
import BeansPage from './pages/BeansPage'
import RecipesPage from './pages/RecipesPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'beans/:id', element: <BeansPage /> },
        { path: 'facts', element: <Facts /> },
        { path: 'recipes', element: <Recipes /> },
        { path: 'recipes/:id', element: <RecipesPage /> },
        { path: 'combinations', element: <Combinations /> },
        { path: 'history', element: <History /> },
      ],
    },
    { path: '*', element: <NotFound /> },
  ],
  { basename: '/beans' }
)

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        icon={false}
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
