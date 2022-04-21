import styled from "styled-components";

export const UpdateWrapper = styled.div`
  margin-top: 5rem;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CategoryContentOne = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
export const CategoryContentTwo = styled.div`
  position: relative;
  width: 282px;
  height: 44px;
  background: #160c24;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  align-items: center;
  border: 1px solid #ffff;
`;

export const InputIcon = styled.div`
  margin-right: 12px;
  padding-left: 8px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  outline: 0;
  color: #ffff;
  font-family: "Raleway";
  &::placeholder {
    color: #ffff;
  }
`;

export const LinkWrapper = styled.div`
  margin-top: 2rem;

  .see_all {
    color: #0fae96;
    font-family: "Raleway";
  }
`;
