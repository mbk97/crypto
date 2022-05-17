import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { NewsSkeletonWrapper } from "./style";
import { useSelector } from "react-redux";

const NewsSkeleton = () => {
  const newsData = useSelector((state) => state.news?.newsResult);
  return (
    <NewsSkeletonWrapper>
      {newsData?.map(() => {
        return (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={297}
            height={430}
            sx={{ bgcolor: "rgba(255, 255, 255, 0.02)" }}
            className="news_skeleton"
          />
        );
      })}
    </NewsSkeletonWrapper>
  );
};

export default NewsSkeleton;
