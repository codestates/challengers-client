import React from "react";
import {
  ChallengeContainer,
  Image,
  Img,
  ChallengeImg
} from "./ChallengeElements";
import image from "../../images/image14.svg";

const Challenge = ({ challenge }) => {
  return (
    <>
      <ChallengeContainer>
        <ChallengeImg>
          MY CHALLENGE : <Img src={image} />
        </ChallengeImg>
        {challenge}
        <Image />
      </ChallengeContainer>
    </>
  );
};

export default Challenge;
