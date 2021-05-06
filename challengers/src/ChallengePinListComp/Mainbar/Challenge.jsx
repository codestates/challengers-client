import React from "react";
import image from "../../images/image15.svg";
import {
  ChallengeContainer,
  Image,
  ChallengeImg,
  Img
} from "./ChallengeElements";

const Challenge = ({ challenge }) => {
  return (
    <>
      <ChallengeContainer>
        <ChallengeImg>
          PIN: <Img src={image} />
        </ChallengeImg>
        {challenge}
        <Image />
      </ChallengeContainer>
    </>
  );
};

export default Challenge;
