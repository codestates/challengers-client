import React, { useState } from "react";
import Sidebar from "../Follower/Sidebar/Sidebar";
import Navbar from "../Follower/Navbar/Nav";
import Main from "../Follower/Mainbar/Main";
import Footer from "../Follower/Footerbar/Footer";

const Follower = () => {
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

export default Follower;
