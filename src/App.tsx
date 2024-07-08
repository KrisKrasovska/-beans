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
      <div>
        <p>Работает</p>
      </div>
		<Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<HomePage />}
        />
        <Route
          path="/login"
          element={<HomePage />}
        />
        <Route
          path="/contacts"
          element={<HomePage />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </ThemeProvider>
  );
};

export default App;
