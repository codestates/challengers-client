import React from "react";
import image from "../../images/image16.png";
import {
  ChallengeContainer1,
  Image,
  ChallengeImg,
  Img
} from "./ChallengeElements";

const Challenge = ({ challenge1 }) => {
  return (
    <>
      <ChallengeContainer1>
        <ChallengeImg>
          FOLLOWING: <Img src={image} />
        </ChallengeImg>
        {challenge1}
        <Image />
      </ChallengeContainer1>
    </>
  );
};

export default Challenge;
