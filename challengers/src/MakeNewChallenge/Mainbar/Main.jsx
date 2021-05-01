import React, { useState } from "react";
import {
  MakeNewChallengesDiv,
  FormNewChallenge,
  MakeNewChallengeTitle,
  TitleInput,
  TagBoxInput,
  BodyInput,
  ButtonWrapper,
  CheckedBtn,
  CancelBtn,
  FormNew
} from "./MainElements";

const Main = () => {
  const [title, setTitle] = useState("");
  const [tagBox, setTagBox] = useState("");
  const [body, setBody] = useState("");

  const writeTitle = (e) => {
    setTitle(e.target.value);
  };

  const writeTagBox = (e) => {
    setTagBox(e.target.value);
  };

  const writeBody = (e) => {
    setBody(e.target.value);
  };

  const confirmClick = () => {};

  const cancelClick = () => {};

  return (
    <>
      <MakeNewChallengesDiv>
        <FormNewChallenge>
          <MakeNewChallengeTitle>MAKE NEW CHALLENGE</MakeNewChallengeTitle>
          <FormNew>
            <TitleInput
              value={title}
              type="text"
              placeholder="Title"
              onChange={writeTitle}
            />
            <TagBoxInput
              value={tagBox}
              type="text"
              autoComplete="on"
              placeholder="Tag"
              onChange={writeTagBox}
            />
            <BodyInput
              value={body}
              type="text"
              autoComplete="on"
              placeholder="Body Message"
              onChange={writeBody}
            />
          </FormNew>
          <ButtonWrapper>
            <CheckedBtn>Confirm</CheckedBtn>
            <CancelBtn>Cancel</CancelBtn>
          </ButtonWrapper>
        </FormNewChallenge>
      </MakeNewChallengesDiv>
    </>
  );
};

export default Main;
