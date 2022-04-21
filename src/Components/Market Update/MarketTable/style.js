import styled from "styled-components";

export const TableWrapper = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 5px;
  margin-top: 3rem;
`;

export const TableComponent = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow-x: auto;
`;

export const TableRow = styled.tr`
  text-align: center;

  .red {
    color: red;
  }
  .green {
    color: #0fae96;
  }
`;

export const TableHeader = styled.th`
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 10px 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

export const TableData = styled.td`
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  border-collapse: collapse;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
