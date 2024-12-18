import React from "react";
import { Route, Routes } from "react-router";
import { COUNTRY_ROUTE, HOME_ROUTE, NOT_FOUND_ROUTE } from "./constant/routes";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeProvider";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={COUNTRY_ROUTE} element={<CountryDetails />} />
          <Route path={NOT_FOUND_ROUTE} element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
