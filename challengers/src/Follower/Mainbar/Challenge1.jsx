import React from "react";
import image from "../../images/image17.png";
import {
  ChallengeContainer1,
  Image,
  ChallengeImg,
  Img
} from "./ChallengeElements1";

const Challenge1 = ({ challenge2 }) => {
  return (
    <>
      <ChallengeContainer1>
        <ChallengeImg>
          FOLLOWER: <Img src={image} />
        </ChallengeImg>
        {challenge2}
        <Image />
      </ChallengeContainer1>
    </>
  );
};

export default Challenge1;
