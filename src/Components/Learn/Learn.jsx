import {
  ArticleHeader,
  ArticleLabel,
  ArticleText,
  SmallHeader,
  SmallText,
  SubHeader,
  Subtitle,
} from "Components/Global/Title";
import React from "react";
import { Container, LearnWrapper, NewsCardContainer } from "./style";
import { newsData } from "./newsData";
import { ArticleCard, CardImg } from "Components/Global/Card";
import { LinkWrapper } from "Components/Market Update/style";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <LearnWrapper>
      <Container>
        <SubHeader>Learn About Cryptocurrency</SubHeader>
        <Subtitle>Learn all about cryptocurrency to start investing</Subtitle>

        <NewsCardContainer>
          {newsData.map((item) => {
            const { id, text, img, title, label } = item;
            return (
              <ArticleCard key={id}>
                <CardImg src={img} />
                <ArticleLabel>{label}</ArticleLabel>
                <ArticleHeader>{title}</ArticleHeader>
                <ArticleText>{text}</ArticleText>
              </ArticleCard>
            );
          })}
        </NewsCardContainer>
      </Container>
      <LinkWrapper>
        <Link to="" className="see_all">
          See All Articles
        </Link>
      </LinkWrapper>
    </LearnWrapper>
  );
};

export default Learn;
