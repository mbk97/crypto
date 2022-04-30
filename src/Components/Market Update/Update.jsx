import React, { useState } from "react";
import {
  CategoryContainer,
  CategoryContentOne,
  CategoryContentTwo,
  UpdateWrapper,
  Input,
  InputIcon,
  LinkWrapper,
} from "./style";
import { SubHeader, Subtitle } from "Components/Global/Title";
import { BsSearch } from "react-icons/bs";
import Table from "./MarketTable/Table";
import { Link } from "react-router-dom";

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
          <Subtitle>Cryptocurrency Categories</Subtitle>
        </CategoryContentOne>
        <CategoryContentTwo>
          <InputIcon>
            <BsSearch className="input_icon" />
          </InputIcon>
          <Input
            type="text"
            placeholder="Search Coin"
            value={search}
            onChange={handleChange}
          />
        </CategoryContentTwo>
      </CategoryContainer>
      <Table search={search} />
      <LinkWrapper>
        <Link to="allCoins" className="see_all">
          See All Coins
        </Link>
      </LinkWrapper>
    </UpdateWrapper>
  );
};

export default Update;
