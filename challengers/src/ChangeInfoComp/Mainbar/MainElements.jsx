import styled from "styled-components";

export const ChangeInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: "Lobster", cursive;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ChangeInfoForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ChangeInfoTitle = styled.h1`
  color: #fff;
  text-align: center;
`;

export const FormChangeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const EmailInput = styled.input`
  width: 50vw;
  height: 4rem;
  font-size: x-large;
  padding: 1rem;
  outline: none;

  &:focus {
    animation-name: border-focus;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes border-focus {
    from {
      border-radius: 0;
    }
    to {
      border-radius: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 50vw;
    height: 2rem;
    padding: 1rem;
    font-size: 1.1rem;
  }
`;
export const OldPwdInput = styled.input`
  width: 30vw;
  height: 4rem;
  font-size: x-large;
  padding: 1rem;
  outline: none;

  &:focus {
    animation-name: border-focus;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes border-focus {
    from {
      border-radius: 0;
    }
    to {
      border-radius: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 30vw;
    height: 2rem;
    padding: 1rem;
    font-size: 0.9rem;
  }
`;
export const NewPwdInput = styled.input`
  width: 30vw;
  height: 4rem;
  font-size: x-large;
  padding: 1rem;
  outline: none;

  &:focus {
    animation-name: border-focus;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes border-focus {
    from {
      border-radius: 0;
    }
    to {
      border-radius: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 30vw;
    height: 2rem;
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

export const CheckPwdInput = styled.input`
  width: 30vw;
  height: 4rem;
  font-size: x-large;
  padding: 1rem;
  outline: none;

  &:focus {
    animation-name: border-focus;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes border-focus {
    from {
      border-radius: 0;
    }
    to {
      border-radius: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 30vw;
    height: 2rem;
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
`;

export const ChangeBtn = styled.button`
  margin: 10px;
  width: 100px;
  height: 30px;
  box-shadow: 1px 1px 1px rgba(0, 0, 63, 1);
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background: lightgray;
    transition: all 0.5s ease-in-out;
    transform: rotate(10deg);
  }
`;

export const CancelBtn = styled.button`
  margin: 10px;
  width: 100px;
  height: 30px;
  box-shadow: 1px 1px 1px rgba(0, 0, 63, 1);
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background: lightgray;
    transition: all 0.5s ease-in-out;
    transform: rotate(-10deg);
  }
`;
