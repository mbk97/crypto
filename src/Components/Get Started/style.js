import styled from "styled-components";

export const GetStartedWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const GeStartedContentOne = styled.div``;
export const GeStartedContentTwo = styled.div``;

export const GetStartedItem = styled.div`
  padding: 10px 52px 20px 20px;
  width: 533.5px;
  height: 128px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  display: flex;
  align-items: center;
  margin: 20px 0 20px 0;

  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
    margin: 30px auto;
  }
`;

export const FlexOne = styled.div`
  margin-right: 30px;
`;
export const FlexTwo = styled.div``;
