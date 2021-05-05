import styled from "styled-components";

export const MakeNewChallengesDiv = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #ffdab9;
`;

export const FormNewChallenge = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MakeNewChallengeTitle = styled.h1 `
  background: brown;
  width: 100vw;
  text-align: center;
  font-family: "Lobster", cursive;
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 10px;
  }
`;

export const FormNew = styled.div `
  display: flex;
  flex-direction: column;
  background: #ffdab9;
  overflow: auto;
  padding: 2rem;
  margin-top: 1rem;
  width: 70%;
  height: 40vh;
  box-shadow: 10px 10px 10px 5px #444;
`;

export const TitleInput = styled.input `
  flex: 1;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 20px;
  width: 100%;
  height: 50px;

  &:focus {
    outline: none;
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
`;

export const TagBoxInput = styled.input `
  flex: 1;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 20px;
  width: 100%;
  height: 50px;

  &:focus {
    outline: none;
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
`;

export const BodyInput = styled.input `
  flex: 1;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 20px;
  width: 100%;
  height: 50px;

  &:focus {
    outline: none;
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
`;

export const ButtonWrapper = styled.div `
  display: flex;
  margin: 25px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CheckedBtn = styled.button `
  padding: 5px;
  margin-right: 20px;
  box-shadow: 1px 1px 1px rgba(0, 0, 63, 1);
  font-weight: 900;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    background: lightgray;
    transition: all 0.5s ease-in-out;
    transform: rotate(10deg);
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CancelBtn = styled.button `
  padding: 5px;
  margin-right: 20px;
  box-shadow: 1px 1px 1px rgba(0, 0, 63, 1);
  font-weight: 900;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background: lightgray;
    transition: all 0.5s ease-in-out;
    transform: rotate(-10deg);
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;