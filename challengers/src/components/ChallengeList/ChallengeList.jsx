import React from "react";
import image from "../../images/image1.svg";

import {
  ChallengeListContainer,
  ChallengeImg,
  Img,
  ChallengeWrapper,
  ChallengeListTitle,
  ChallengeListCardGroup,
  ChallengeCard
} from "./ChallengeListElements";

const ChallengeList = () => {
  return (
    <ChallengeListContainer>
      <ChallengeImg>
        <Img src={image} />
      </ChallengeImg>
      <ChallengeWrapper>
        <ChallengeListTitle>Challenge List</ChallengeListTitle>
        <ChallengeListCardGroup>
          <ChallengeCard>hey</ChallengeCard>
          <ChallengeCard>hey</ChallengeCard>
          <ChallengeCard>hey</ChallengeCard>
          <ChallengeCard>hey</ChallengeCard>
        </ChallengeListCardGroup>
      </ChallengeWrapper>
    </ChallengeListContainer>
  );
};

export default ChallengeList;
