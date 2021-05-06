import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  align-items: center;
  background: #000;
  display: grid;
  z-index: 999;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  top: ${({ isRight }) => (isRight ? "0" : "-100%")};
  opacity: ${({ isRight }) => (isRight ? "70%" : "0")};
  transition: 0.5s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 3rem;
  cursor: pointer;
`;

export const ShutIcon = styled(FaTimes)`
  color: #fff;
`;

export const SidebarWrapper = styled.div`
  height: 100vh;
`;

export const SidebarMenu = styled.div`
  height: 100vh;
`;

export const SidebarUpperMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 100px;
  height: 100vh;
`;

export const SidebarUpperLink1 = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  font-size: 3rem;
  font-weight: 1000;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding: 15px;
  font-family: "Cinzel", serif;

  &:hover {
    color: #01bf71;
    transition: 0.1s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SidebarUpperLink2 = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  font-size: 3rem;
  font-weight: 1000;
  text-decoration: none;
  color: rgba(252, 186, 127);
  cursor: pointer;
  padding: 15px;
  font-family: "Cinzel", serif;

  &:hover {
    color: #01bf71;
    transition: 0.1s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SidebarPage = styled.div`
  text-align: center;
`;

export const SidebarLowerMenu = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: "Cinzel", serif;
  text-align: center;
`;

export const SidebarLowerLink1 = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
  color: rgba(252, 186, 127);
  cursor: pointer;
  padding: 30px 0;

  &:hover {
    color: #01bf71;
    transition: 0.5s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SidebarLowerLink2 = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding: 30px 0;

  &:hover {
    color: #01bf71;
    transition: 0.5s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SidebarLowerLink3 = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding: 30px 0;

  &:hover {
    color: #01bf71;
    transition: 0.5s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SidebarLowerLink4 = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding: 30px 0;

  &:hover {
    color: #01bf71;
    transition: 0.5s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SidebarLowerLink5 = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  font-size: 2rem;
  font-weight: 800;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding: 30px 0;

  &:hover {
    color: #01bf71;
    transition: 0.5s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
