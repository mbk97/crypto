import { CoinBtn } from "Components/Global/Button";
import { Card, CardImg, CardText, CardTextTwo } from "Components/Global/Card";
import { SubHeader, CoinTitle } from "Components/Global/Title";
import React from "react";
import { MarketData } from "./MarketData";
import {
  CardDivider,
  CardFooter,
  CardHeader,
  CardHeaderContentOne,
  CardHeaderContentTwo,
  ChartContainer,
  MarketCardContainer,
  MarketWrapper,
  PriceContainer,
} from "./style";

const MarketTrend = () => {
  return (
    <MarketWrapper>
      <SubHeader>Market Trend</SubHeader>
      <MarketCardContainer>
        {MarketData.map((item) => {
          const {
            id,
            title,
            coinName,
            readMore,
            chart,
            coinImage,
            price,
            percent,
          } = item;
          return (
            <Card key={id}>
              <CardHeader>
                <CardHeaderContentOne>
                  <CardImg src={coinImage} />
                  <CoinTitle>{title}</CoinTitle>
                  <CoinBtn>{coinName}</CoinBtn>
                </CardHeaderContentOne>
                <CardHeaderContentTwo>
                  <CardImg src={readMore} />
                </CardHeaderContentTwo>
              </CardHeader>
              <CardDivider></CardDivider>

              <CardFooter>
                <PriceContainer>
                  <CardText>{price}</CardText>
                  <CardTextTwo>{percent}</CardTextTwo>
                </PriceContainer>
                <ChartContainer>
                  <CardImg src={chart} />
                </ChartContainer>
              </CardFooter>
            </Card>
          );
        })}
      </MarketCardContainer>
    </MarketWrapper>
  );
};

export default MarketTrend;
