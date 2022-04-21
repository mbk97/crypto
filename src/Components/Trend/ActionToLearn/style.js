import styled from "styled-components";

export const ActionWrapper = styled.div`
  margin-top: 5rem;
  width: 91vw;
  padding: 20px 60px;
  height: 142px;
  left: 90px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px 20px;
    width: 81vw;
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const ContentOne = styled.div`
  flex: 50%;
  /* align-self: flex-end;
   */
  text-align: left;
`;
export const ContentTwo = styled.div`
  flex: 50%;
  text-align: right;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
