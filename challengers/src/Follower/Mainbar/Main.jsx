import React from "react";
import { BiWinkSmile } from "react-icons/bi";
import { ChallengeData } from "../../data/ChallengeData";
import Challenge from "./Challenge";
import Cover1 from "../Video/Cover1";
import {
  MainContainer,
  MainHashTag,
  MainChallengeList,
  MainList
} from "./MainElements";

const Main = () => {
  return (
    <MainContainer>
      <MainHashTag>
        PICK YOUR CHALLENGE!!! <BiWinkSmile />
      </MainHashTag>
      <MainChallengeList>
        <Cover1 />
        <MainList>
          {ChallengeData.map((challenge) => {
            return (
              <Challenge key={challenge.id} challenge={challenge.challenge} />
            );
          })}
        </MainList>
      </MainChallengeList>
    </MainContainer>
  );
};

export default Main;
