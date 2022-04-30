import Header from "Components/Header/Header";
import GlobalStyle from "Components/Global/GlobalStyle";
import React, { Fragment } from "react";
import Main from "Components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "Components/Footer/Footer";
import AllCoins from "Components/AllCoins/AllCoins";

const App = () => {
  return (
    <Fragment>
      <Router>
        <GlobalStyle />
        <Header />
        <Main />
        <Routes>
          <Route path="allCoins" exact element={<AllCoins />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
