import Intro from "Components/Introduction/Intro";
import MarketTrend from "Components/Market Trend/MarketTrend";
import Navbar from "Components/Nav/Navbar";
import React from "react";
import { HeaderWrapper } from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar />
      <Intro />
      <MarketTrend />
    </HeaderWrapper>
  );
};

export default Header;
