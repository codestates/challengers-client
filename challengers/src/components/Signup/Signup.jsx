import React, { useState } from "react";
import ButtonSignbox from "./ButtonSignbox";

const Signup = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPwd, setCheckPwd] = useState("");
  const [email, setEmail] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);

  const writeUserId = (e) => {
    e.preventDefault();
    setUserId(e.target.value);
  };

  const writePwd = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const writeSamepwd = (e) => {
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
    <div className="sign-up">
      <div className="signup-form">
        <h1> Sign Up </h1>
        <form className="signup">
          <div className="signup">
            <input
              value={userId}
              className="userid"
              type="text"
              placeholder="Userid"
              onChange={writeUserId}
            />
          </div>
          <br />
          <div className="Pwd">
            <input
              value={password}
              className="Pwd"
              type="password"
              autoComplete="on"
              placeholder="Password"
              onChange={writePwd}
            />
          </div>
          <br />
          <div className="checkPwd">
            <input
              value={checkPwd}
              className="checkPwd"
              type="password"
              autoComplete="on"
              placeholder="Check password"
              onChange={writeSamepwd}
            />
          </div>
          <br />
          <div className="email">
            <input
              value={email}
              className="email"
              type="text"
              placeholder="E-mail"
              onChange={writeEmail}
            />
          </div>
          <br />
        </form>
        <ButtonSignbox submitClick={submitClick} cancelClick={cancelClick} />
      </div>
    </div>
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
