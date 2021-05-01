import React, { useState } from "react";
import Sidebar from "../ChallengeListComponent/Sidebar/Sidebar";
import Navbar from "../ChallengeListComponent/Navbar/Nav";
import Footer from "../ChallengeListComponent/Footerbar/Footer";
import Main from "../ChallengeListComponent/Mainbar/Main";

const ChallengeList = () => {
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

export default ChallengeList;
