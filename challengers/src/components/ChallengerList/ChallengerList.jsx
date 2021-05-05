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



const ChallengerList = (props) => {

  return (
    <ChallengersListContainer>
      <ChallengerWrapper>
        <ChallengerListTitle>Hall of fame</ChallengerListTitle>
        <ChallengerListCardGroup>

          {
            props.dataFollower.map((ele) => {
              return (
                <ChallengerCard key = {ele.userId}>
                  <ChallengerName>{ele.userId}</ChallengerName>
                  <LikeIcon />{ele.Like}
                </ChallengerCard>
              )
            })
          
          }

        </ChallengerListCardGroup>
      </ChallengerWrapper>
      <ChallengerImg>
        <Img src={image} />
      </ChallengerImg>
    </ChallengersListContainer>
  );
};

export default ChallengerList;
