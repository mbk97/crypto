import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    display: none;
    left: -900px;
    top: 0px;
    /* background: rgba(255, 255, 255, 0.81); */
    background: #11011e;
    width: 0%;
    align-items: flex-start;
    padding: 30px 10px;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
  }

  &.mobile_nav {
    width: 60%;
    left: 0;
    display: block;
    transition: all 0.5s ease-in-out;

    /* add transition */
  }
`;

export const NavContainer = styled.div`
  transition: all 0.5s ease-in-out;
`;

export const NavListWrapper = styled.ul`
  display: flex;
  width: 450px;
  justify-content: space-between;

  .nav-item.active {
    color: #0fae96;
  }

  @media (max-width: 768px) {
    /* display: none; */
    width: 0px;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease-in-out;
  }
`;

export const NavList = styled.li`
  list-style: none;
  text-transform: capitalize;
  margin: 20px 0;
`;

export const LogoImg = styled.img``;

export const NavBtnWrapper = styled.div`
  display: flex;
`;

export const LanguageWrapper = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
  margin-right: 20px;
`;

export const NavImg = styled.img``;

export const NavText = styled.p``;

export const MenuBtnWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    position: absolute;
    display: block;
    top: 30px;
    right: 10px;
    z-index: 8;
    /* width: 0px;
    display: flex;
    flex-direction: column; */
  }
  .icons {
    font-size: 1.5rem;
  }
`;
