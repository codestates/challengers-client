import React from "react";
import {
  ChallengeContainer,
  Image,
  Img,
  ChallengeImg
} from "./ChallengeElements";
import image from "../../images/image14.svg";

const Challenge = () => {
  return (
    <>
      <ChallengeContainer>
        <ChallengeImg>
          MY CHALLENGE : <Img src={image} />
        </ChallengeImg>
        <Image />
      </ChallengeContainer>
    </>
  );
};

export default Challenge;
