import { CardImg } from "Components/Global/Card";
import React, { useEffect, useState } from "react";
import {
  TableWrapper,
  TableComponent,
  TableRow,
  TableHeader,
  TableData,
} from "./style";
import { tableHeader } from "./tableData";
import { marketUpdateAction } from "Components/redux/actions/marketUpdate";
import { useDispatch } from "react-redux";
import { action } from "typesafe-actions";
import { marketUpdateTypes } from "Components/redux/actions/actionTypes";
import { useSelector } from "react-redux";
import { StatOne, StatTwo } from "assets";

const Table = ({ search }) => {
  const [loading, setLoading] = useState(false);
  //set the skeleton loading
  const dispatch = useDispatch();

  let data = useSelector((state) => state.marketUpdate?.marketUpdateData);

  const filteredCoins = data.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    dispatch(marketUpdateAction({ onSuccess, onError }));
    setLoading(true);
  }, [dispatch]);

  const onSuccess = (data) => {
    dispatch(action(marketUpdateTypes.FETCH_UPDATE_SUCCESS, data));
    setLoading(false);
  };

  const onError = (err) => {
    console.log(err);
    setLoading(false);
  };
  return (
    <TableWrapper>
      <TableComponent>
        {tableHeader.map((item) => {
          return <TableHeader key={item.id}>{item.Name}</TableHeader>;
        })}
        {filteredCoins?.map((item) => {
          const {
            market_cap_rank,
            name,
            symbol,
            current_price,
            price_change_percentage_24h,
          } = item;

          return (
            <TableRow key={market_cap_rank}>
              <TableData>{market_cap_rank}</TableData>
              <TableData>
                {name} | <span>{symbol}</span>
              </TableData>
              <TableData>{current_price.toLocaleString()} $</TableData>
              <TableData
                className={price_change_percentage_24h < 0 ? "red" : "green"}
              >
                {price_change_percentage_24h.toFixed(2)}%
              </TableData>
              <TableData>
                {Math.sign(price_change_percentage_24h.toFixed(2)) === -1 ? (
                  <CardImg src={StatTwo} />
                ) : (
                  <CardImg src={StatOne} />
                )}
              </TableData>
            </TableRow>
          );
        })}
      </TableComponent>
    </TableWrapper>
  );
};

export default Table;
