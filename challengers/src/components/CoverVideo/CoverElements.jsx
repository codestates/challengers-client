import styled from "styled-components";

export const CoverContainer = styled.div `
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
  position: relative;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

export const CoverVideoArea = styled.div `
  position : absolute;
  top : 0;
  right : 0;
  left : 0;
  bottom : 0;
  width :100%;
  height : 100%:
  overflow: hidden;
`;

export const VideoPlay = styled.video `
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const CoverText = styled.div `
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Anton", sans-serif;

  @media screen and (max-width: 768px) {
    height: 100%;
    overflow: auto;
  }
`;

export const Cover1 = styled.h1 `
  color: gray;
  font-size: 80px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

export const CoverP = styled.p `
  color: #000;
  font-size: 50px;
  font-weight: 100;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;