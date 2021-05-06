import styled from "styled-components";
import { FcChargeBattery } from "react-icons/fc";

export const ChallengeContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 5px;
  padding-left: 20px;
  font-size: 1.5rem;
  font-family: "Lobster", cursive;
  border-radius: 50px;
  width: 80%;
  height: 300px;
  box-shadow: 0 0 10px #fa8072;

  &:hover {
    box-shadow: 0 0 10px rgba(233, 228, 206);
    transform: translateY(10px);
  }

  &:active {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Image = styled(FcChargeBattery)
`
  font-size: 5rem;
  padding-right: 20px;
`;

export const Img = styled.img `
  object-fit: contain;
  width: 12vh;
`;

export const ChallengeImg = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;