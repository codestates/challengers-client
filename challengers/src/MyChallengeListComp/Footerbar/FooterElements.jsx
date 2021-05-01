import styled from "styled-components";

export const FooterContainer = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px dotted #000;
  align-items: center;
  background: #000;
  margin: 0;
`;

export const FooterTeamInfo = styled.ul `
  display: flex;
  width: 100%;
`;

export const FooterTeamList = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-around;
  color: #fff;
`;

export const FooterLast = styled.div `
  display: flex;
`;

export const FooterCopyRight = styled.h2 `
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem;
  color: #fff;
`;

export const FooterSnsImg = styled.ul `
  display: flex;
`;

export const FooterImgList = styled.li `
  display: flex;
  cursor: pointer;
`;

export const Img = styled.img `
  object-fit: contain;
  width: 3rem;
  margin: 1rem;
`;