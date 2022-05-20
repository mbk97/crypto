import React, { useState } from "react";
import { Logo, Arrow, LangSvg } from "../../assets/index";
import {
  NavImg,
  LanguageWrapper,
  LogoImg,
  Nav,
  NavBtnWrapper,
  NavList,
  NavListWrapper,
  NavText,
  MenuBtnWrapper,
  NavContainer,
} from "./style";
import { NavData } from "./NavData";
import { GeneralBtn } from "Components/Global/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <NavContainer>
      <Nav className={click ? "mobile_nav" : ""}>
        <LogoImg src={Logo} alt="Logo" />
        <NavListWrapper>
          {NavData.map((item) => {
            const { id, title, active, path } = item;
            return (
              <NavList
                key={id}
                className={`nav-item ${active ? "active" : ""}`}
                to={path}
                smooth={true}
                duration={1000}
                spy={true}
                activeClass="active"
                onClick={handleClick}
              >
                {title}
              </NavList>
            );
          })}
        </NavListWrapper>

        <NavBtnWrapper>
          <LanguageWrapper>
            <NavImg src={LangSvg} />
            <NavText>EN</NavText>
            <NavImg src={Arrow} />
          </LanguageWrapper>
          <GeneralBtn>Login</GeneralBtn>
        </NavBtnWrapper>
      </Nav>
      <MenuBtnWrapper onClick={handleClick}>
        {click ? (
          <AiOutlineClose className="icons" />
        ) : (
          <AiOutlineMenu className="icons" />
        )}
      </MenuBtnWrapper>
    </NavContainer>
  );
};

export default Navbar;
