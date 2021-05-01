import React, { useState } from "react";
import Sidebar from "../MakeNewChallenge/Sidebar/Sidebar";
import Main from "../MakeNewChallenge/Mainbar/Main";
import Footer from "../MakeNewChallenge/Footerbar/Footer";
import Navbar from "../MakeNewChallenge/Navbar/Nav";

const MakeNewChallenges = () => {
  const [isRight, setIsRight] = useState(false);

  const toggle = () => {
    setIsRight(!isRight);
  };

  return (
    <>
      <Sidebar isRight={isRight} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Main />
      <Footer />
    </>
  );
};
export default MakeNewChallenges;
