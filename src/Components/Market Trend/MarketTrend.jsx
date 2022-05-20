import { useEffect, useState } from "react";
import { CoinBtn } from "Components/Global/Button";
import { Card, CardImg, CardText, CardTextTwo } from "Components/Global/Card";
import { SubHeader, CoinTitle, ErrorText } from "Components/Global/Title";
import React from "react";
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
import { trendCoinAction } from "Components/redux/actions/action";
import { useDispatch } from "react-redux";
import { action } from "typesafe-actions";
import { trendCoinTypes } from "Components/redux/actions/actionTypes";
import { useSelector } from "react-redux";
import { MoreSvg, StatOne, StatTwo } from "assets";
import MarketSkeleton from "Components/Global/Loaders/MarketSkeleton";

const MarketTrend = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  // console.log(loading);

  useEffect(() => {
    dispatch(trendCoinAction({ onSuccess, onError }));
    setLoading(true);
  }, [dispatch]);

  const onSuccess = (data) => {
    setLoading(false);
    dispatch(action(trendCoinTypes.FETCH_COIN_SUCCESS, data));
  };

  const onError = (err) => {
    setErrorMsg(err.message);
    setLoading(false);
  };

  const trendData = useSelector((state) => state.trend.trendCoin);

  console.log(trendData);

  return (
    <MarketWrapper id="market_trend">
      <SubHeader>Market Trend</SubHeader>
      <ErrorText>{errorMsg}</ErrorText>
      <MarketCardContainer>
        {loading && <MarketSkeleton />}
        {trendData.map((item) => {
          const {
            image,
            id,
            symbol,
            name,
            current_price,
            price_change_percentage_24h,
          } = item;
          return (
            <Card key={id}>
              <CardHeader>
                <CardHeaderContentOne>
                  <CardImg src={image} />
                  <CoinTitle>{name}</CoinTitle>
                  <CoinBtn>{symbol}</CoinBtn>
                </CardHeaderContentOne>
                <CardHeaderContentTwo>
                  <CardImg src={MoreSvg} />
                </CardHeaderContentTwo>
              </CardHeader>
              <CardDivider></CardDivider>

              <CardFooter>
                <PriceContainer>
                  <CardText>$ {current_price.toLocaleString()}</CardText>
                  <CardTextTwo>
                    {price_change_percentage_24h < 0 ? (
                      <p className="coin-percent red">
                        {price_change_percentage_24h.toFixed(2)}%
                      </p>
                    ) : (
                      <p className="coin-percent green">
                        {price_change_percentage_24h.toFixed(2)}%
                      </p>
                    )}
                  </CardTextTwo>
                </PriceContainer>
                <ChartContainer>
                  {Math.sign(price_change_percentage_24h) === 1 ? (
                    <CardImg src={StatOne} />
                  ) : (
                    <CardImg src={StatTwo} />
                  )}
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
