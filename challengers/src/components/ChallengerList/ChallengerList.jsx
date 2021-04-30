import React from "react";
import image from "../../images/image2.svg";
import {
  ChallengersListContainer,
  ChallengerImg,
  Img,
  ChallengerWrapper,
  ChallengerListTitle,
  ChallengerListCardGroup,
  ChallengerCard,
  ChallengerName,
  LikeIcon
} from "./ChallengerElements";

const ChallengerList = () => {
  return (
    <ChallengersListContainer>
      <ChallengerWrapper>
        <ChallengerListTitle>Hall of fame</ChallengerListTitle>
        <ChallengerListCardGroup>
          <ChallengerCard>
            <ChallengerName>Lee</ChallengerName>
            <LikeIcon />
          </ChallengerCard>
          <ChallengerCard>
            <ChallengerName>Lee</ChallengerName>
            <LikeIcon />
          </ChallengerCard>
          <ChallengerCard>
            <ChallengerName>Lee</ChallengerName>
            <LikeIcon />
          </ChallengerCard>
          <ChallengerCard>
            <ChallengerName>Lee</ChallengerName>
            <LikeIcon />
          </ChallengerCard>
        </ChallengerListCardGroup>
      </ChallengerWrapper>
      <ChallengerImg>
        <Img src={image} />
      </ChallengerImg>
    </ChallengersListContainer>
  );
};

export default ChallengerList;
