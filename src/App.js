import Header from "Components/Header/Header";
import GlobalStyle from "Components/Global/GlobalStyle";
import React, { Fragment } from "react";
import Main from "Components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "Components/Footer/Footer";
import Scroll from "Components/SmoothScroll/Scroll";

const App = () => {
  return (
    <Fragment>
      <Router>
        <GlobalStyle />
        <Scroll />
        <Header />
        <Main />
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
