import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 104px;
  height: 50px;
  background: #0fae96;
  border-radius: 10px;
  outline: none;
  padding: 13px 24px;
  color: #ffff;
  border: 0;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const GeneralBtn = ({ children }) => {
  return <Button>{children}</Button>;
};

const GetStartedBtn = styled(Button)`
  width: 190px;
  margin-top: 1rem;
`;

const CoinBtn = styled.button`
  padding: 6px 6px;
  width: auto;
  height: 28px;
  background: #b6b6b6;
  border-radius: 4px;
  border: none;
  background: rgba(182, 182, 182, 1);
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
  text-transform: uppercase;
`;

const LearnBtn = styled(Button)`
  /* padding: 16px 24px; */
  width: 207px;
  height: 56px;
  background: #0fae96;
  border-radius: 10px;
`;

export { GeneralBtn, GetStartedBtn, CoinBtn, LearnBtn };
