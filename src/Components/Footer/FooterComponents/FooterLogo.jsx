import React from "react";
import { FooterLogoWrapper, FooterSvg, FooterSvgWrapper } from "./style";
import { Logo } from "assets";
import { LogoImg } from "Components/Nav/style";
import { footerLogoData } from "./footerData";
import { FooterLink } from "Components/Global/Title";

const FooterLogo = () => {
  return (
    <FooterLogoWrapper>
      <LogoImg src={Logo} />
      <FooterSvgWrapper>
        {footerLogoData.map((item) => {
          const { id, Icon } = item;
          return <FooterSvg src={Icon} key={id} />;
        })}
      </FooterSvgWrapper>
      <FooterLink>2021 CoinMarketCap. All rights reserved</FooterLink>
    </FooterLogoWrapper>
  );
};

export default FooterLogo;
