import React from "react";
import { ChallengeData } from "../../data/ChallengeData";
import Challenge from "./Challenge";
import Cover1 from "../Video/Cover1";
import { GiOnTarget } from "react-icons/gi";
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
        WHATS YOUR OWN CHALLENGES!? <GiOnTarget />
      </MainHashTag>
      <MainChallengeList>
        <Cover1 />
        <MainList>
          {ChallengeData.map((data) => {
            return <Challenge key={data.id} challenge={data.challenge} />;
          })}
        </MainList>
      </MainChallengeList>
    </MainContainer>
  );
};

export default Main;
