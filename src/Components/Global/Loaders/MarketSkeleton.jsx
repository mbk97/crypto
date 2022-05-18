import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { MarketSkeletonWrapper } from "./style";
import { useSelector } from "react-redux";

const MarketSkeleton = () => {
  const trendData = useSelector((state) => state.trend.trendCoin);

  return (
    <MarketSkeletonWrapper>
      {trendData.map(() => {
        return (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={297}
            height={270}
            sx={{ bgcolor: "rgba(255, 255, 255, 0.02)" }}
            className="skeleton"
          />
        );
      })}
    </MarketSkeletonWrapper>
  );
};

export default MarketSkeleton;
