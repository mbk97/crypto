import React from "react";
import { MainWrapper } from "./style";
import Trend from "Components/Trend/Trend";
import Update from "Components/Market Update/Update";
import GetStarted from "Components/Get Started/GetStarted";
import Learn from "Components/Learn/Learn";

const Main = () => {
  return (
    <MainWrapper>
      <Trend />
      <Update />
      <GetStarted />
      <Learn />
    </MainWrapper>
  );
};

export default Main;
