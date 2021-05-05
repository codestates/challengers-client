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

const Main = ({ dataTag }) => {
  console.log({ dataTag });
  return (
    <MainContainer>
      <MainHashTag>
        PICK YOUR CHALLENGE!!! <BiWinkSmile />
      </MainHashTag>
      <MainChallengeList>
        <Cover1 />
        <MainList>
          {dataTag.map((challenge) => {
            return (
              <Challenge key={challenge.id} challenge={challenge.tag_name} />
            );
          })}
        </MainList>
      </MainChallengeList>
    </MainContainer>
  );
};

export default Main;
