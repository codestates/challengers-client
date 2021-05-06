import React from "react";
import { BiWinkSmile } from "react-icons/bi";
import Challenge from "./Challenge";
import Challenge1 from "./Challenge1";
import Cover1 from "../Video/Cover1";
import {
  MainContainer,
  MainHashTag,
  MainChallengeList,
  MainList,
  MainList1
} from "./MainElements";

const Main = ({ followingTag, followerTag }) => {
  console.log({ followingTag, followerTag });
  return (
    <MainContainer>
      <MainHashTag>
        FOLLOWER && FOLLOWING!!! <BiWinkSmile />
      </MainHashTag>
      <MainChallengeList>
        <Cover1 />
        <MainList>
          <>
            {followingTag.map((challenge) => {
              return (
                <Challenge key={challenge.id} challenge1={challenge.userId} />
              );
            })}
          </>
        </MainList>
        <MainList1>
          <>
            {followerTag.map((challenge) => {
              return (
                <Challenge1 key={challenge.id} challenge2={challenge.userId} />
              );
            })}
          </>
        </MainList1>
      </MainChallengeList>
    </MainContainer>
  );
};

export default Main;
