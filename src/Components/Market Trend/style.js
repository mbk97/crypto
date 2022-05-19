import styled from "styled-components";

export const MarketWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export const MarketCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  gap: 19px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardDivider = styled.div`
  background: #ecf1f0;
  opacity: 0.05;
  height: 1px;
  margin: 17px 0;
`;

export const CardHeaderContentOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardHeaderContentTwo = styled.div`
  display: flex;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

export const PriceContainer = styled.div``;

export const ChartContainer = styled.div``;
