import React, { useState } from "react";
import {
  ChangeInfoDiv,
  ChangeInfoForm,
  ChangeInfoTitle,
  FormChangeInfo,
  EmailInput,
  OldPwdInput,
  NewPwdInput,
  CheckPwdInput,
  ButtonWrapper,
  ChangeBtn,
  CancelBtn
} from "./MainElements";

const Main = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkPwd, setCheckPwd] = useState("");
  const [email, setEmail] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);

  const writeOldPwd = (e) => {
    e.preventDefault();
    setOldPassword(e.target.value);
  };

  const writeNewPwd = (e) => {
    e.preventDefault();
    setNewPassword(e.target.value);
  };

  const checkNewPwd = (e) => {
    e.preventDefault();
    setCheckPwd(e.target.value);
  };

  const writeEmail = (e) => {
    e.preventDefault();

    // if (e.target.value.includes("@")) {
    //   setEmail(e.target.value);
    // } else {
    //   setEmail("");
    // }
  };

  const submitClick = () => {};

  const cancelClick = () => {};

  return (
    <>
      <ChangeInfoDiv>
        <ChangeInfoForm>
          <ChangeInfoTitle>CHANGE YOUR INFO!!</ChangeInfoTitle>
          <FormChangeInfo>
            <EmailInput
              value={email}
              type="text"
              placeholder="Email"
              onChange={writeEmail}
            />
            <br />
            <OldPwdInput
              value={oldPassword}
              type="password"
              autoComplete="on"
              placeholder="OldPassword"
              onChange={writeOldPwd}
            />
            <br />
            <NewPwdInput
              value={newPassword}
              type="password"
              autoComplete="on"
              placeholder="NewPassword"
              onChange={writeNewPwd}
            />
            <br />
            <CheckPwdInput
              value={checkPwd}
              type="password"
              autoComplete="on"
              placeholder="CheckPassword"
              onChange={checkNewPwd}
            />
            <br />
          </FormChangeInfo>
          <ButtonWrapper>
            <ChangeBtn>Changed</ChangeBtn>
            <CancelBtn>Cancel</CancelBtn>
          </ButtonWrapper>
        </ChangeInfoForm>
      </ChangeInfoDiv>
    </>
  );
};

export default Main;
