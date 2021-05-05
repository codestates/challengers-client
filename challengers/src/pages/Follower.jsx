import React, { useState, useEffect } from "react";
import Sidebar from "../Follower/Sidebar/Sidebar";
import Navbar from "../Follower/Navbar/Nav";
import Main from "../Follower/Mainbar/Main";
import Footer from "../Follower/Footerbar/Footer";

const Follower = () => {
  const [isRight, setIsRight] = useState(false);
  const [followingTag, setFollowingTag] = useState([]);
  const [followerTag, setFollowerTag] = useState([]);

  useEffect(() => {
    console.log("axios....");
    //axios.get('http://localhost:5000/following')

    let followingTag_sample = [
      {
        id: 1,
        userId: "following1"
      },
      {
        id: 2,
        userId: "following2"
      },
      {
        id: 3,
        userId: "following3"
      },
      {
        id: 4,
        userId: "following4"
      },
      {
        id: 5,
        userId: "following5"
      }
    ];

    setFollowingTag(...followingTag, followingTag_sample);
  }, []);

  useEffect(() => {
    console.log("axios....");
    //axios.get('http://localhost:5000/following')

    let followerTag_sample = [
      {
        id: 1,
        userId: "follower1"
      },
      {
        id: 2,
        userId: "follower2"
      },
      {
        id: 3,
        userId: "follower3"
      },
      {
        id: 4,
        userId: "follower4"
      },
      {
        id: 5,
        userId: "follower5"
      }
    ];

    setFollowerTag(...followerTag, followerTag_sample);
  }, []);

  const toggle = () => {
    setIsRight(!isRight);
  };

  return (
    <>
      <Sidebar isRight={isRight} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Main followerTag={followerTag} followingTag={followingTag} />
      <Footer />
    </>
  );
};

export default Follower;
