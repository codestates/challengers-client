import React from "react";
import Challenge from "./Challenge";
import Cover1 from "../Video/Cover1";
import { GiOnTarget } from "react-icons/gi";
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
        WHATS YOUR OWN CHALLENGES!? <GiOnTarget />
      </MainHashTag>
      <MainChallengeList>
        <Cover1 />
        <MainList>
          {dataTag.map((data) => {
            return <Challenge key={data.id} challenge={data.tag_name} />;
          })}
        </MainList>
      </MainChallengeList>
    </MainContainer>
  );
};

export default Main;
