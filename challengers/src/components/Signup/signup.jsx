import React, { useState } from "react";
import ButtonSignbox from "./ButtonSignbox";
import { 
  SignupDiv,
  SignupForm,
  Title,
  FormSignup,
  UserId,
  UseridInput,
  Password,
  UserpwInput,
  CheckPassword,
  CheckpwInput,
  Email,
  EmailInput
} from "./SignupElements";

const Signup = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPwd, setCheckPwd] = useState("");
  const [email, setEmail] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);

  const writeUserId = (e) => {
    console.log("userID: ", e)
    e.preventDefault();
    setUserId(e.target.value);
  };

  const writePwd = (e) => {
    console.log("pw: ", e)
    e.preventDefault();
    setPassword(e.target.value);
  };

  const writeSamepwd = (e) => {
    console.log("checkpw: ", e)
    e.preventDefault();
    setCheckPwd(e.target.value);
  };

  const writeEmail = (e) => {
    console.log("email: ", e)
    e.preventDefault();
    setEmail(e.target.value);

    // if (e.target.value.includes("@")) {
    //   setEmail(e.target.value);
    // } else {
    //   setEmail("");
    // }
  };

  const submitClick = () => {
    console.log("제출")
  };

  const cancelClick = () => {
    console.log("가입취소")
  };

  return (
    <SignupDiv>
      <SignupForm>
        <Title>Sign Up</Title>
        <FormSignup>
          <UserId>
            <UseridInput
              value={userId}
              type="text"
              placeholder="Userid"
              onChange={writeUserId}
            />
          </UserId>
          <br />
          <Password>
            <UserpwInput
              value={password}
              type="password"
              autoComplete="on"
              placeholder="Password"
              onChange={writePwd}
            />
          </Password>
          <br />
          <CheckPassword>
            <CheckpwInput
              value={checkPwd}
              type="password"
              autoComplete="on"
              placeholder="Check password"
              onChange={writeSamepwd}
            />
          </CheckPassword>
          <br />
          <Email>
            <EmailInput
              value={email}
              type="text"
              placeholder="E-mail"
              onChange={writeEmail}
            />
          </Email>
          <br />
        </FormSignup>
        <ButtonSignbox submitClick={submitClick} cancelClick={cancelClick} />
      </SignupForm>
    </SignupDiv>
  );
};

export default Signup;

//   // submit 버튼 클릭연동함수
//   submitClick = () => {
//     console.log(
//       "가입완료",
//       this.state.userId,
//       this.state.password,
//       this.state.checkPwd,
//       this.state.email
//     );
//     // this.props.history.push('/')
//   };

//   // cancel 버튼 클릭연동함수
//   cancelClick = () => {
//     console.log("가입을 취소하고 메인페이지로 돌아갑니다.");
//     // this.prop.history.push('/')
//   };
