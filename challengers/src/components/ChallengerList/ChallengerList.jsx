import React from "react";
import image from "../../images/image2.svg";
import {
  ChallengersListContainer,
  ChallengerImg,
  Img,
  ChallengerWrapper,
  ChallengerListTitle,
  ChallengerListCardGroup,
  ChallengerCard
} from "./ChallengerElements";

const ChallengerList = () => {
  return (
    <ChallengersListContainer>
      <ChallengerWrapper>
        <ChallengerListTitle>Hall of fame</ChallengerListTitle>
        <ChallengerListCardGroup>
          <ChallengerCard>hey</ChallengerCard>
          <ChallengerCard>hey</ChallengerCard>
          <ChallengerCard>hey</ChallengerCard>
          <ChallengerCard>hey</ChallengerCard>
        </ChallengerListCardGroup>
      </ChallengerWrapper>
      <ChallengerImg>
        <Img src={image} />
      </ChallengerImg>
    </ChallengersListContainer>
  );
};

export default ChallengerList;
