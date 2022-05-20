import styled from "styled-components";

export const VisibilityContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  background-color: #0fae96;
  height: 40px;
  width: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 50%;
  cursor: pointer;
`;

export const ScrollIcon = styled.span`
  font-size: 1rem;
  color: #ffff;
  transition: all 0.5s ease-in-out;
  animation-name: blink;
  animation-duration: 0.7s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes blink {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
