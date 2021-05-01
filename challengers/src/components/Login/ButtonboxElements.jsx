import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ButtonBox = styled.div `
  color: #75bc00;
  // border : 3px solid #000;
  display: flex;
  justify-content: center;
  align-items:center;
`;

export const Login = styled.button `
  max-width: 50%;
  height: 50px;
  font-size: 20px;
  font-color: #eaeaea;
  padding: 0px 16px;
  border:none;
  border-radius: 4px;
  margin: 10px;
  margin-top: 30px;
  cursor: pointer;
  background-color: #99e000;
`;

export const Backward = styled.button `
  max-width: 50%;
  height: 50px;
  font-size: 20px;
  padding: 0px 16px;
  border:none;
  border-radius: 4px;
  margin: 10px;
  margin-top: 30px;
  cursor: pointer;
  background-color: #99e000;
`;

export const LoginIcon = styled(Link)
`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
      margin-left: 16px;
      margin-top: 8px;
  }
`;

export const BackIcon = styled(Link)
`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
      margin-left: 16px;
      margin-top: 8px;
}
`;