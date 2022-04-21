import React from "react";
import { IntroContent, IntroWrapper } from "./style";
import { Title, Subtitle } from "Components/Global/Title";
import { GetStartedBtn } from "Components/Global/Button";

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroContent>
        <Title>Start and Build Your Crypto Portfolio Here</Title>
        <Subtitle>
          Only at CryptoCap, you can build a good portfolio and learn <br />{" "}
          best practices about cryptocurrency.
        </Subtitle>
        <GetStartedBtn>Get Started</GetStartedBtn>
      </IntroContent>
    </IntroWrapper>
  );
};

export default Intro;
