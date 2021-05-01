import React, { useState } from "react";
import Main from "../ChallengePinListComp/Mainbar/Main";
import Footer from "../ChallengePinListComp/Footerbar/Footer";
import Navbar from "../ChallengePinListComp/Navbar/Nav";
import Sidebar from "../ChallengePinListComp/Sidebar/Sidebar";

const ChallengePinList = () => {
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

export default ChallengePinList;
