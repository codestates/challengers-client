import React, { useState } from "react";
import Sidebar from "../MyChallengeListComp/Sidebar/Sidebar";
import Navbar from "../MyChallengeListComp/Navbar/Nav";
import Main from "../MyChallengeListComp/Mainbar/Main";
import Footer from "../MyChallengeListComp/Footerbar/Footer";

const MyChallenges = () => {
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

export default MyChallenges;
