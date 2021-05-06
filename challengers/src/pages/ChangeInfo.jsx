import React, { useState } from "react";
import Footer from "../ChangeInfoComp/Footerbar/Footer";
import Navbar from "../ChangeInfoComp/Navbar/Nav";
import Sidebar from "../ChangeInfoComp/Sidebar/Sidebar";
import Main from "../ChangeInfoComp/Mainbar/Main";
import Img from "../ChangeInfoComp/CoverImg/CoverImg";
import styled from "styled-components";

const ChangeInfo = () => {
  const [isRight, setIsRight] = useState(false);

  const toggle = () => {
    setIsRight(!isRight);
  };

  return (
    <Container>
      <Sidebar isRight={isRight} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Img />
      <Main />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ChangeInfo;
