import React, { FC } from "react";
import "./App.css";
import { theme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Layout } from "./components/Layout/Layout";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import Facts from "./pages/Facts";
import Recipes from "./pages/Recipes";
import Combinations from "./pages/Combinations";
import History from "./pages/History";
import BeansPage from "./pages/BeansPage";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
		      <ToastContainer
        icon={false}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <GlobalStyle />
		<Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
		  <Route path="/beans/:id" element={<BeansPage />} />
        <Route
          path="/facts"
          element={<Facts />}
        />
        <Route
          path="/recipes"
          element={<Recipes />}
        />
        <Route
          path="/combinations"
          element={<Combinations />}
        />
		<Route
          path="/history"
          element={<History />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </ThemeProvider>
  );
};

export default App;
