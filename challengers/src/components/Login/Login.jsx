import Buttonbox from "./Buttonbox";
import logo from "../../logo.png";
import React, { useState, useEffect } from "react";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userIdChecked, setUserIdChecked] = useState(false);
  const [passwordChecked, setPasswordChecked] = useState(false);

  useEffect(() => {
    console.log("Id Input", userId);
  }, [userId]);

  useEffect(() => {
    console.log("Password Input", password);
  }, [password]);

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // if (e.target.value.length >= 8) {
  //   setPassword(e.target.value);
  // } else {
  //   setPassword("");
  // }
  const loginClick = () => {};
  const backClick = () => {};

  return (
    <div className="Login">
      <div className="login-form">
        <img src={logo} alt="" />
        <form className="login">
          <div className="userid">
            <input
              value={userId}
              className="userid"
              type="text"
              placeholder="userId"
              onChange={handleUserId}
            />
          </div>
          <br />
          <div className="password">
            <input
              value={password}
              className="password"
              type="password"
              autoComplete="on"
              placeholder="password"
              onChange={handlePassword}
            />
          </div>
          <br />
        </form>
        <Buttonbox loginClick={loginClick} backClick={backClick} />
      </div>
    </div>
  );
};

export default Login;

// 로그인버튼 클릭연동함수
// loginClick = () => {
//   console.log("사용자 email : ", this.state.userId);
//   console.log("사용자 password : ", this.state.password);
//   // this.props.history.push('/')
// };

// // 뒤로가기버튼 클릭연동함수
// backClick = () => {
//   console.log("메인페이지로 이동합니다.");
//   // this.prop.history.push('/')
// };
