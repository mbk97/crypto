import Intro from "Components/Introduction/Intro";
import MarketTrend from "Components/Market Trend/MarketTrend";
import Navbar from "Components/Nav/Navbar";
import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Intro />
      <MarketTrend />
    </React.Fragment>
  );
};

export default Header;
