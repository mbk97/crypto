import { FooterTitle, FooterLink } from "Components/Global/Title";
import React from "react";
import { learnData } from "./footerData";
import { FooterLinkContainer, LearnWrapper } from "./style";

const FooterLearn = () => {
  return (
    <LearnWrapper>
      <FooterTitle>Learn</FooterTitle>
      <FooterLinkContainer>
        {learnData.map((item) => {
          const { id, text } = item;
          return <FooterLink key={id}>{text}</FooterLink>;
        })}
      </FooterLinkContainer>
    </LearnWrapper>
  );
};

export default FooterLearn;
