import React, { useState } from "react";
import Cover1 from "../Video/Cover1";
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

  const confirmClick = () => {
    console.log("asdfads");
  };

  const cancelClick = () => {};

  return (
    <>
      <MakeNewChallengesDiv>
        <FormNewChallenge>
          <MakeNewChallengeTitle> MAKE NEW CHALLENGE </MakeNewChallengeTitle>{" "}
          <Cover1 />
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
            <CheckedBtn onClick={confirmClick}> Confirm </CheckedBtn>{" "}
            <CancelBtn onClick={cancelClick}> Cancel </CancelBtn>
          </ButtonWrapper>
        </FormNewChallenge>
      </MakeNewChallengesDiv>
    </>
  );
};

export default Main;
