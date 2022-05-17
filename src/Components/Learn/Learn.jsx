import React, { useEffect, useState } from "react";
import {
  ArticleHeader,
  ArticleText,
  SubHeader,
  Subtitle,
} from "Components/Global/Title";
import { Container, LearnWrapper, NewsCardContainer } from "./style";
import { ArticleCard, NewsImg } from "Components/Global/Card";
import { LinkWrapper } from "Components/Market Update/style";
import { Link } from "react-router-dom";
import { newsAction } from "Components/redux/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import { action } from "typesafe-actions";
import { newsTypes } from "Components/redux/actions/actionTypes";
import NewsSkeleton from "Components/Global/Loaders/NewsSkeleton";

const Learn = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  console.log(errorMsg);

  const newsData = useSelector((state) => state.news?.newsResult);
  console.log(newsData);

  useEffect(() => {
    setLoading(true);
    dispatch(newsAction({ onSuccess, onError }));
  }, []);

  const onSuccess = (data) => {
    setLoading(false);
    dispatch(action(newsTypes.FETCH_NEWS_SUCCESS, data));
  };
  const onError = (error) => {
    setErrorMsg(error);
    setLoading(false);
  };

  return (
    <LearnWrapper>
      <Container>
        <SubHeader>Learn About Cryptocurrency</SubHeader>
        <Subtitle>Learn all about cryptocurrency to start investing</Subtitle>

        <NewsCardContainer>
          {loading && <NewsSkeleton />}
          {newsData.map((item) => {
            const { id, url, description, image, title } = item;
            return (
              <ArticleCard key={id}>
                <NewsImg src={image.thumbnail} />
                <ArticleHeader>{title}</ArticleHeader>
                <ArticleText>{description.slice(0, 124)}.....</ArticleText>
                <a
                  href={url}
                  className="see_more"
                  target="_blank"
                  rel="noreferrer"
                >
                  See More
                </a>
              </ArticleCard>
            );
          })}
        </NewsCardContainer>
      </Container>
      <LinkWrapper>
        {/* <Link to="" className="see_all">
          See All Articles
        </Link> */}
      </LinkWrapper>
    </LearnWrapper>
  );
};

export default Learn;
