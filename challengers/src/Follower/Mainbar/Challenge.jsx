import React from "react";
import image from "../../images/image15.svg";
import {
  ChallengeContainer,
  Image,
  ChallengeImg,
  Img
} from "./ChallengeElements";

const Challenge = () => {
  return (
    <>
      <ChallengeContainer>
        <ChallengeImg>
          PIN: <Img src={image} />
        </ChallengeImg>
        <Image />
      </ChallengeContainer>
    </>
  );
};

export default Challenge;
