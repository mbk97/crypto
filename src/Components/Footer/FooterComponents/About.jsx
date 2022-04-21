import { FooterLink, FooterTitle } from "Components/Global/Title";
import React from "react";
import { aboutData } from "./footerData";
import { Wrapper, FooterLinkContainer } from "./style";

const About = () => {
  return (
    <Wrapper>
      <FooterTitle> About Us</FooterTitle>
      <FooterLinkContainer>
        {aboutData.map((item) => {
          const { id, text } = item;
          return <FooterLink key={id}>{text}</FooterLink>;
        })}
      </FooterLinkContainer>
    </Wrapper>
  );
};

export default About;
