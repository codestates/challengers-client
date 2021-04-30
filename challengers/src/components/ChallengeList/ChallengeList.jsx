import React from "react";
import image from "../../images/image1.svg";

import {
  ChallengeListContainer,
  ChallengeImg,
  Img,
  ChallengeWrapper,
  ChallengeListTitle,
  ChallengeListCardGroup,
  ChallengeCard,
  ChallengeTag,
  ChallengeHashTag
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
          <ChallengeCard>
            <ChallengeTag>CHALLENGE TAG</ChallengeTag>
            <ChallengeHashTag># CHALLENGE!</ChallengeHashTag>
          </ChallengeCard>
          <ChallengeCard>
            <ChallengeTag>CHALLENGE TAG</ChallengeTag>
            <ChallengeHashTag># CHALLENGE!</ChallengeHashTag>
          </ChallengeCard>
          <ChallengeCard>
            <ChallengeTag>CHALLENGE TAG</ChallengeTag>
            <ChallengeHashTag># CHALLENGE!</ChallengeHashTag>
          </ChallengeCard>
          <ChallengeCard>
            <ChallengeTag>CHALLENGE TAG</ChallengeTag>
            <ChallengeHashTag># CHALLENGE!</ChallengeHashTag>
          </ChallengeCard>
        </ChallengeListCardGroup>
      </ChallengeWrapper>
    </ChallengeListContainer>
  );
};

export default ChallengeList;
