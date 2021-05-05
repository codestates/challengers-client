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

// const likes = arr.sort( (a,b) => {
//   return b - a;
// });

const ChallengerList = ({name}) => {
  return (
    <ChallengersListContainer>
      <ChallengerWrapper>
        <ChallengerListTitle>Hall of fame</ChallengerListTitle>
        <ChallengerListCardGroup>
          <ChallengerCard>
            {/* {likes.map((name, index) => <ChallengerName key={index}>{name}</ChallengerName>)} */}
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
