import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavTitle,
  NavBtn,
  BtnSignInLink,
  BtnSignUpLink,
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
            <BtnSignUpLink to="/signup">Sign Up</BtnSignUpLink>
            <BtnSignInLink to="/login">Log In</BtnSignInLink>
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
