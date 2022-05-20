import React from "react";
import { IntroContent, IntroWrapper } from "./style";
import { Title, Subtitle } from "Components/Global/Title";
import { GetStartedBtn } from "Components/Global/Button";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroContent>
        <Title>Start and Build Your Crypto Portfolio Here</Title>
        <Subtitle>
          Only at CryptoCap, you can build a good portfolio and learn <br />{" "}
          best practices about cryptocurrency.
        </Subtitle>
        <Link to="get_started" smooth={true} duration={1000} spy={true}>
          <GetStartedBtn>Get Started</GetStartedBtn>
        </Link>
      </IntroContent>
    </IntroWrapper>
  );
};

export default Intro;
