import React, { useState } from "react";
import {
  CategoryContainer,
  CategoryContentOne,
  UpdateWrapper,
  LinkWrapper,
} from "./style";
import { SubHeader, Subtitle } from "Components/Global/Title";
import { BsSearch } from "react-icons/bs";
import Table from "./MarketTable/Table";

const Update = () => {
  const [search, setSearch] = useState("");

  console.log(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <UpdateWrapper>
      <SubHeader>Market Update</SubHeader>
      <CategoryContainer>
        <CategoryContentOne>
          <Subtitle>Top 20 Cryptocurrency</Subtitle>
        </CategoryContentOne>
      </CategoryContainer>
      <Table search={search} />
      <LinkWrapper>
        <a
          href="https://www.coinbase.com/"
          target="_blank"
          rel="noreferrer"
          className="see_all"
        >
          See All Coins
        </a>
      </LinkWrapper>
    </UpdateWrapper>
  );
};

export default Update;
