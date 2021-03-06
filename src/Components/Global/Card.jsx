import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
  border-radius: 18px;
  padding: 18px 20px 20px 19px;
  width: 297px;
  height: 220px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

const CardImg = styled.img`
  height: 50px;
  border-radius: 50%;
  width: 50px;
`;

const NewsImg = styled.img`
  height: 150px;
  width: 100%;
  border-radius: 10px 10px 0 0px;
`;

const CardText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 8px;
  color: #ecf1f0;
`;

const CardTextTwo = styled.p`
  color: #b6b6b6;
  font-size: 18px;
  font-family: "Roboto";
  font-style: normal;
  margin: 0;

  .coin-percent.red {
    color: red;
  }
  .coin-percent.green {
    color: #0fae96;
  }
`;

const FeatureCard = styled(CardWrapper)`
  width: 296px;
  height: 300px;
  backdrop-filter: blur(200px);
  padding: 30px 30px 30px 28px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ArticleCard = styled(FeatureCard)`
  padding: 0px 0px 16px;
  height: 430px;
  width: 297px;

  .see_more {
    color: #0fae96;
    padding-left: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FeatureCardText = styled(CardText)`
  font-size: 20px;
`;
const FeatureCardTextTwo = styled(CardTextTwo)`
  font-size: 16px;
`;

const LinkContainer = styled.div`
  margin-top: 50px;

  .feature_link {
    color: #0fae96;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  .link_arrow {
    font-size: 1.5rem;
    padding: 2px 0 0 10px;
  }
`;

export {
  Card,
  CardImg,
  CardText,
  CardTextTwo,
  FeatureCard,
  FeatureCardText,
  FeatureCardTextTwo,
  LinkContainer,
  ArticleCard,
  NewsImg,
};
