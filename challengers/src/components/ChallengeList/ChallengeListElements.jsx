import styled from "styled-components";

export const ChallengeListContainer = styled.div`
  display: flex;
  background: #f5f5dc;
  align-items: center;
  justify-content: space-around;
  color: #0d0d0d;
  border: 1px dotted #000;
  width: 100%;
  height: 100%;
`;

export const ChallengeImg = styled.div`
  display: flex;
  flex: 2;
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
  padding: 40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ChallengeWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
  }
`;

export const ChallengeListTitle = styled.h2`
  flex: 1;
  border: 5px solid #808080;
  border-radius: 20px;
  padding: 10px;
  max-width: 100%;
  font-size: 3rem;
  font-family: "Anton", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    max-width: 100%;
  }
`;

export const ChallengeListCardGroup = styled.div`
  display: flex;
  padding-top: 30px;
  max-width: 100%;
  height: 10rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const ChallengeCard = styled.div`
  box-shadow: 0 0 10px #fa8072;
  width: 200px;
  height: 100%;
  margin: 10px;

  @media screen and (max-width: 768px) {
    width: 50vw;
    height: 10vh;
  }
`;
