import Skeleton from "@mui/material/Skeleton";

import React from "react";
import { MarketSkeletonWrapper } from "./style";

const MarketSkeleton = () => {
  return (
    <MarketSkeletonWrapper>
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={297}
        height={270}
        sx={{ bgcolor: "rgba(255, 255, 255, 0.02)" }}
        className="skeleton"
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={297}
        height={270}
        sx={{ bgcolor: "rgba(255, 255, 255, 0.02)" }}
        className="skeleton"
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={297}
        height={270}
        sx={{ bgcolor: "rgba(255, 255, 255, 0.02)" }}
        className="skeleton"
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={297}
        height={270}
        sx={{ bgcolor: "rgba(255, 255, 255, 0.02)" }}
        className="skeleton"
      />
    </MarketSkeletonWrapper>
  );
};

export default MarketSkeleton;
