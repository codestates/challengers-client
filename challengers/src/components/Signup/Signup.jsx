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
  EmailInput,
} from "./SignupElements";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
// require("dotenv").config();

const Signup = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPwd, setCheckPwd] = useState("");
  const [email, setEmail] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);

  const writeUserId = (e) => {
    console.log("userID: ", e);
    e.preventDefault();
    setUserId(e.target.value);
  };

  const writePwd = (e) => {
    console.log("pw: ", e);
    e.preventDefault();
    setPassword(e.target.value);
  };

  const writeSamepwd = (e) => {
    console.log("checkpw: ", e);
    e.preventDefault();
    setCheckPwd(e.target.value);
  };

  const writeEmail = (e) => {
    console.log("email: ", e);
    e.preventDefault();
    setEmail(e.target.value);
  };

  const history = useHistory();

  const submitClick = async () => {
    console.log("환경변수", process.env.REACT_APP_LINK_URL);
    console.log("프로세스 env", process.env);
    if (password !== checkPwd) {
      window.alert("입력하신 비밀번호가 서로 일치하지 않습니다");
      return;
    }
    console.log("제출 :", userId, password, email);
    await axios
      .post(
        `${process.env.REACT_APP_LINK_URL}/signup`,
        {
          userId,
          password,
          email,
        },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.message === "Signup succeed") {
          history.push("/main");
          window.alert("회원가입이 완료되었습니다!");
        } else if (res.data.message === "Same user existed") {
          window.alert("동일한 아이디나 이메일이 존재합니다");
          return;
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        console.log("axios signup finish");
      });
  };

  const cancelClick = () => {
    console.log("가입취소");
    alert("가입이 취소되었습니다");
    history.push("/main");
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
