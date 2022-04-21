import { FooterLink, FooterTitle } from "Components/Global/Title";
import React from "react";
import { servicesData } from "./footerData";
import { Wrapper, FooterLinkContainer } from "./style";

const Services = () => {
  return (
    <Wrapper>
      <FooterTitle>Services</FooterTitle>
      <FooterLinkContainer>
        {servicesData.map((item) => {
          const { id, text } = item;
          return <FooterLink key={id}>{text}</FooterLink>;
        })}
      </FooterLinkContainer>
    </Wrapper>
  );
};

export default Services;
