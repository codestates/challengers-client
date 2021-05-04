import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavTitle,
  NavBtn,
  BtnSignOutLink,
  NavIcon,
  BtnMenu
} from "./NavElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/main">CodeMon</NavLogo>
          <NavTitle>Challengers</NavTitle>
          <NavBtn>
            <BtnSignOutLink to="/main">Sign Out</BtnSignOutLink>
            <BtnMenu onClick={toggle}>Menu</BtnMenu>
          </NavBtn>
          <NavIcon>
            <FaBars onClick={toggle} />
          </NavIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
