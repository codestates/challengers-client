import styled from "styled-components";

export const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  background: #f5f5dc;
`;

export const MainHashTag = styled.h1 `
  font-size: 3rem;
  width: 100%;
  font-family: "Lobster", cursive;
  padding: 1rem;
`;

export const MainChallengeList = styled.div `
  display: flex;
  flex-direction: column;
`;

export const MainList = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`;