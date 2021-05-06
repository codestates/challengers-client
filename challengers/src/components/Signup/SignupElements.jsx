import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SignupDiv = styled.div`
  min-height:692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    108deg,
    rgba(250, 237, 125, 1) 0%,
    rgba(250, 237, 125, 1) 100%
);
`;

export const SignupForm = styled.div`
min-height:480px;
min-width: 550px;
//   position: fixed;
bottom: 10;
left: 10;
right: 10;
top: 10;
margin: 0 auto;
//   z-index: 0;
//   position: relative;
justify-content: center;
align-items: center;
background: linear-gradient(
  108deg,
  rgba(242, 254, 157, 1) 0%,
  rgba(242, 255, 157, 1) 100%
);
box-shadow: 5px 5px 15px 5px gray;
border-radius: 6px;
`;

export const Title = styled.h1`
   text-align: center;
   margin-top: 50px;
   margin-bottom: 30px;
   font-family: "Lobster", cursive;
`;

export const FormSignup = styled.form`
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
      height: 80%;
  }
`;

export const UserId = styled.div`
  justify-content:center;
  display: flex;
  margin-top: 50px;
`;

export const UseridInput = styled.input`
  width: 50%;
  height: 50px;
  font-size: 20px;
  padding: 0px 16px;
  border:none;
  border-radius: 4px;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const Password = styled.div`
  justify-content:center;
  display: flex;
`;

export const UserpwInput = styled.input`
  width: 50%;
  height: 50px;
  font-size: 20px;
  padding: 0px 16px;
  border:none;
  border-radius: 4px;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const CheckPassword = styled.div`
  justify-content:center;
  display: flex;
`;

export const CheckpwInput = styled.input`
  width: 50%;
  height: 50px;
  font-size: 20px;
  padding: 0px 16px;
  border:none;
  border-radius: 4px;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const Email = styled.div`
  justify-content:center;
  display: flex;
`

export const EmailInput = styled.input`
  width: 50%;
  height: 50px;
  font-size: 20px;
  padding: 0px 16px;
  border:none;
  border-radius: 4px;
  display: flex;
  justify-content:center;
  align-items:center;
`;