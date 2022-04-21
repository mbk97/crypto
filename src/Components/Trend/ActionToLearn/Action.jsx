import { LearnBtn } from "Components/Global/Button";
import { SubHeader, Subtitle } from "Components/Global/Title";
import React from "react";
import { ActionWrapper, ContentOne, ContentTwo } from "./style";

const Action = () => {
  return (
    <ActionWrapper>
      <ContentOne>
        <SubHeader>New In Cryptocurrency?</SubHeader>
        <Subtitle>
          We'll tell you what cryptocurrencies are, how they work and why you
          should own one right now. So let's do it.
        </Subtitle>
      </ContentOne>
      <ContentTwo>
        <LearnBtn>Learn & Explore Now</LearnBtn>
      </ContentTwo>
    </ActionWrapper>
  );
};

export default Action;
