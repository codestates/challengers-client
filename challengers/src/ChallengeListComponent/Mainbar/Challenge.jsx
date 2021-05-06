import React from "react";
import { ChallengeContainer, Image } from "./ChallengeElements";

const Challenge = ({ challenge }) => { 
  console.log(challenge);
  return (
    <>
      <ChallengeContainer>
        CHALLENGE: {challenge} <Image />
      </ChallengeContainer>
    </>
  );
};

export default Challenge;
