import styled from "styled-components";

export const CoverContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 400px;
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
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;