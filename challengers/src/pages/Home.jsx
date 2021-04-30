import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Nav";
import Cover from "../components/CoverVideo/Cover";
import ChallengeList from "../components/ChallengeList/ChallengeList";
import ChallengerList from "../components/ChallengerList/ChallengerList";
import Footer from "../components/Footerbar/Footer";
import Login from "../component/login";
import Signup from "../components/Signup/signup";



//Home 컴포넌트는 App 컴포넌트 대용으로 모든 컴포넌트를 넣어주기 위한 컴포넌트
// isRight로 css값 변화시켜주기 위한 것.
// toggle을 사용하여 클릭 시 상태값이 변경될 수 있도록
const Home = () => {
  const [isRight, setIsRight] = useState(false);

  const toggle = () => {
    setIsRight(!isRight);
  };

  return (
    <>
    <Switch>
      <Route path="/login">{<Login />}</Route>
      <Route path="/signup">{<Signup />}</Route>
      <Route path="/">
      <Sidebar isRight={isRight} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Cover />
      <ChallengeList />
      <ChallengerList />
      <Footer />
      </Route>
    </Switch>
    </>
  );
};

export default Home;
