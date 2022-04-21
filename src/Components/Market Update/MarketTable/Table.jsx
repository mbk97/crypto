import { CardImg } from "Components/Global/Card";
import React from "react";
import {
  TableWrapper,
  TableComponent,
  TableRow,
  TableHeader,
  TableData,
} from "./style";
import { tableData, tableHeader } from "./tableData";

const Table = () => {
  return (
    <TableWrapper>
      <TableComponent>
        {tableHeader.map((item) => {
          return <TableHeader key={item.id}>{item.Name}</TableHeader>;
        })}
        {tableData.map((item, index) => {
          const { No, Name, last_price, change, market_stats } = item;
          return (
            <TableRow key={index}>
              <TableData>{No}</TableData>
              <TableData>{Name}</TableData>
              <TableData>{last_price}</TableData>
              <TableData className={change < 0 ? "red" : "green"}>
                {change}%
              </TableData>
              <TableData>
                <CardImg src={market_stats} />
              </TableData>
            </TableRow>
          );
        })}
      </TableComponent>
    </TableWrapper>
  );
};

export default Table;
