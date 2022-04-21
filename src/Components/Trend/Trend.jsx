import React from "react";
import { FeatureData, TrendWrapper } from "./style";
import { Title, Subtitle } from "Components/Global/Title";
import { trendData } from "./trendData";
import {
  FeatureCard,
  CardImg,
  FeatureCardText,
  FeatureCardTextTwo,
  LinkContainer,
} from "Components/Global/Card";
// import { LinkSvg } from "assets";
import { BsArrowRightShort } from "react-icons/bs";
import Action from "./ActionToLearn/Action";

const Trend = () => {
  return (
    <TrendWrapper>
      <Title>CryptoCap Amazing Features</Title>
      <Subtitle>
        Explore sensational features to prepare your best investment in
        cryptocurrency
      </Subtitle>

      <FeatureData>
        {trendData.map((item) => {
          const { id, icon, name, description, link } = item;
          return (
            <FeatureCard key={id}>
              <CardImg src={icon} />
              <FeatureCardText>{name}</FeatureCardText>
              <FeatureCardTextTwo>{description}</FeatureCardTextTwo>
              <LinkContainer>
                <a href={link} className="feature_link">
                  {link} <BsArrowRightShort className="link_arrow" />
                </a>
              </LinkContainer>
            </FeatureCard>
          );
        })}
      </FeatureData>
      <Action />
    </TrendWrapper>
  );
};

export default Trend;
