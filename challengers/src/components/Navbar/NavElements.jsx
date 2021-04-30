import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div `
  z-index: 999;
  background: #000;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  position: sticky;
  top: 0;
`;

export const NavbarContainer = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  width: 100%;
`;

export const NavLogo = styled(Link)
`
  font-size: 2rem;
  color: #ffd02f;
  font-weight: 800;
  font-family: "Lobster", cursive;
  text-decoration: none;
`;

export const NavTitle = styled.div `
  background: #000;
  color: #fff;
  font-size: 3.5rem;
  font-family: "Lobster", cursive;
  max-width: 1000px;

  @media screen and (max-width: 768px) {
    font-family: "Dancing Script", cursive;
  }
`;

export const NavBtn = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BtnSignUpLink = styled(Link)
`
  display: block;
  padding: 0 20px;
  border: none;
  color: #fff;
  transition: all 0.7s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ##fff;
    color: #8fd14f;
    transition: all 0.7s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BtnSignInLink = styled(Link)
`
  display: block;
  padding: 0 20px;
  border: none;
  color: #fff;
  transition: all 0.7s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ##fff;
    color: #8fd14f;
    transition: all 0.7s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavIcon = styled.div `
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    padding-left: 20px;
    color: #fff;
    cursor: pointer;
    top: 0;
    right: 0;
    transform: translate(-50%, 5%);
    font-size: 2rem;
  }
`;

export const BtnMenu = styled.div `
  display: block;
  font-size: 1.5rem;
  padding-left: 23px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    color: #8fd14f;
    transition: all 0.7s ease-in-out;
    border-bottom: yellow;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;