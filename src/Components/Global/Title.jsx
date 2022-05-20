import React from "react";
import styled from "styled-components";

const TitleText = styled.h1`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  font-family: "Raleway";
  color: #ecf1f0;
`;

const Title = ({ children }) => {
  return <TitleText>{children}</TitleText>;
};

const Subtitle = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #b6b6b6;
  line-height: 29px;
  margin: 0;
`;

const SubHeader = styled(TitleText)`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px; ;
`;

const SmallText = styled(SubHeader)`
  font-size: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #b6b6b6;
`;

const ErrorText = styled(SubHeader)`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallHeader = styled(SubHeader)`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #ecf1f0;
`;

const ArticleHeader = styled(SmallHeader)`
  font-size: 16px;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 40px;
  height: 80px;
  text-transform: lowercase;
`;

const ArticleText = styled(SmallText)`
  font-size: 14px;
  text-align: left;
  padding-left: 10px;
  /* height: 200px; */
`;

const ArticleLabel = styled.div`
  padding: 0px 6px;
  width: 120px;
  height: 22px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 4px;
  margin: 12px 0 0 10px;
`;

const CoinTitle = styled(Subtitle)`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #ecf1f0;
  padding: 0 10px;
`;

const FooterTitle = styled(CoinTitle)`
  text-align: left;
  padding: 0;
`;

const FooterLink = styled(SmallText)`
  color: #b6b6b6;
`;

export {
  Title,
  Subtitle,
  SubHeader,
  CoinTitle,
  SmallText,
  SmallHeader,
  ArticleHeader,
  ArticleText,
  ArticleLabel,
  FooterLink,
  FooterTitle,
  ErrorText,
};
