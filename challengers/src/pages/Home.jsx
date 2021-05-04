import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Nav";
import Cover from "../components/CoverVideo/Cover";
import ChallengeList from "../components/ChallengeList/ChallengeList";
import ChallengerList from "../components/ChallengerList/ChallengerList";
import Footer from "../components/Footerbar/Footer";

import { connect } from "react-redux"; // react, redux연결
import {
  getMyChallengeList,
  deleteMyChallengeList,
  addMyChallengeList
} from "../redux"; // redux의 Action

//Home 컴포넌트는 App 컴포넌트 대용으로 모든 컴포넌트를 넣어주기 위한 컴포넌트
// isRight로 css값 변화시켜주기 위한 것.
// toggle을 사용하여 클릭 시 상태값이 변경될 수 있도록
const Home = (props) => {
  // 리덕스의 스테이츠를 불러오는 횟수 제한
  useEffect(() => {
    props.getMyChallengeList();
  }, []);

  const [isRight, setIsRight] = useState(false);

  const toggle = () => {
    setIsRight(!isRight);
  };

  return (
    <>
      <Sidebar isRight={isRight} toggle={toggle} />
      <Switch>
        <Route path="/main">
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

const mapStateToProps = (state) => {
  console.log("mapStateToProps(My Challenge List) : ", state);
  return {
    myChallengeList: state.myChallengeList
  };
};

const mapDispatchToProps = (dispatch) => {
  // 버튼에 영향
  return {
    getMyChallengeList: () => {
      dispatch(getMyChallengeList());
    },
    deleteMyChallengeList: () => {
      dispatch(deleteMyChallengeList());
    },
    addMyChallengeList: () => {
      dispatch(addMyChallengeList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
