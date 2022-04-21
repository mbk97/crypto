import FooterLearn from "Components/Footer/FooterComponents/FooterLearn";
import React from "react";
import About from "./FooterComponents/About";
import FooterLogo from "./FooterComponents/FooterLogo";
import Services from "./FooterComponents/Services";
import {
  FooterContainerOne,
  FooterContainerTwo,
  FooterItemsWrapper,
} from "./style";

const Footer = () => {
  return (
    <FooterItemsWrapper>
      <FooterContainerOne>
        <FooterLogo />
      </FooterContainerOne>

      <FooterContainerTwo>
        <About />
        <Services />
        <FooterLearn />
      </FooterContainerTwo>
    </FooterItemsWrapper>
  );
};

export default Footer;
