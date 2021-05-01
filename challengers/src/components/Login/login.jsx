import Buttonbox from "./Buttonbox";
// import logo from "../../logo.png";
import React, { useState, useEffect } from "react";
import {
  LoginDiv,
  LoginForm,
  Logo,
  FormLogin,
  UserId,
  UseridInput,
  Password,
  UserpwInput,
  // LoginIcon,
  // BackIcon
} from './LoginElements';

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
  const loginClick = () => {
    console.log("로긴")
  };
  const backClick = () => {
    console.log("뒤로가")
  };

  return (
    <>
    <LoginDiv>
      <LoginForm>
        {/* {<Logo alt="" />} */}
        <FormLogin>
          <UserId>
            <UseridInput
              value={userId}
              type="text"
              placeholder="UserId"
              onChange={handleUserId}
            />
          </UserId>
          <br />
          <Password>
            <UserpwInput
              value={password}
              type="password"
              autoComplete="on"
              placeholder="Password"
              onChange={handlePassword}
            />
          </Password>
          <br />
        </FormLogin>
        <Buttonbox loginClick={loginClick} backClick={backClick} />
      </LoginForm>
    </LoginDiv>
    </>
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