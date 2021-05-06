import React, { useState, useEffect } from "react";
import Main from "../ChallengePinListComp/Mainbar/Main";
import Footer from "../ChallengePinListComp/Footerbar/Footer";
import Navbar from "../ChallengePinListComp/Navbar/Nav";
import Sidebar from "../ChallengePinListComp/Sidebar/Sidebar";

const ChallengePinList = () => {
  const [isRight, setIsRight] = useState(false);
  const [dataTag, setTag] = useState([]);

  useEffect(() => {
    console.log("axios....");
    //axios.get('http://localhost:5000/pin')

    let dataTag_sample = [
      {
        id: 0,
        title: "11",
        tag_name: "32"
      },
      {
        id: 1,
        title: "33",
        tag_name: "22"
      },
      {
        id: 3,
        title: "44",
        tag_name: "55"
      },
      {
        id: 4,
        title: "66",
        tag_name: "77"
      },
      {
        id: 5,
        title: "88",
        tag_name: "99"
      }
    ];

    setTag(...dataTag, dataTag_sample);
  }, []);
  console.log(dataTag);
  const toggle = () => {
    setIsRight(!isRight);
  };

  return (
    <>
      <Sidebar isRight={isRight} toggle={toggle} /> <Navbar toggle={toggle} />{" "}
      <Main dataTag={dataTag} /> <Footer />
    </>
  );
};

export default ChallengePinList;
