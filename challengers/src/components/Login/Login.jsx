import Buttonbox from "./Buttonbox";
// import Logo from "../../logo.png";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  LoginDiv,
  LoginForm,
  Welcome,
  FormLogin,
  UserId,
  UseridInput,
  Password,
  UserpwInput,
  // LoginIcon,
  // BackIcon
} from "./LoginElements";
import axios from "axios";
// import { json } from "sequelize/types";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

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

  const history = useHistory();

  const loginClickInPage = async () => {
    console.log("로긴 :", userId, password);
    await axios
      .post(
        `${process.env.REACT_APP_LINK_URL}/login`,
        {
          userId,
          password,
        },
        {
          // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          "Content-Type": "application/json;charset=UTF-8",
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.message === "login succeed") {
          history.push("/main");
          window.alert("로그인 되었습니다");
        } else if (res.data.message === "User is not existed") {
          window.alert("사용자가 존재하지 않습니다");
          return;
        } else if (res.data.message === "You have wrong password") {
          window.alert("비밀번호가 틀립니다");
          return;
        }
      })
      .catch((error) => {
        console.error(error.message);
        // if(error.response) {
        //   console.log(error.response.data)
        //   console.log(error.response.status)
        //   console.log(error.response.headers)
        // } else if(error.request) {
        //   console.log(error.request)
        // } else {
        //   console.log('Error', error.message)
        // }
        // console.log(error.config);
      })
      .finally(() => {
        console.log("axios finish");
      });
    // axios.post("http://localhost:5000/login",
    // {// withCredentials: true

    //     "userId" : "kimcoding",
    //     "password" : "1234"

    // },{withCredentials: true})
    // .then(data => console.log(data.data.message))
    // .catch(err => console.log(err));
  };

  const backClickInPage = () => {
    console.log("뒤로가");
    alert("로그인이 취소되었습니다. 메인페이지로 돌아갑니다");
    history.push("/main");
  };

  return (
    <>
      <LoginDiv>
        <LoginForm>
          <Welcome>Join to the CodeMon!</Welcome>
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
          <Buttonbox
            loginClick={loginClickInPage}
            backClick={backClickInPage}
          />
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
