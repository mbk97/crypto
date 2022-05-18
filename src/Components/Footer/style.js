import styled from "styled-components";

export const FooterItemsWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const FooterContainerOne = styled.div`
  flex: 35%;

  @media (max-width: 768px) {
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
  }
`;

export const FooterContainerTwo = styled.div`
  flex: 65%;
  display: flex;
  /* justify-content: space-around; */
  justify-content: space-between;
  // text-align: left;

  @media (max-width: 768px) {
    width: 95vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 3rem;
    gap: 30px;
  }
`;
