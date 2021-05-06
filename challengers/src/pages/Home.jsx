// Home.jsx
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Nav";
import Cover from "../components/CoverVideo/Cover";
import ChallengeList from "../components/ChallengeList/ChallengeList";
import ChallengerList from "../components/ChallengerList/ChallengerList";
import Footer from "../components/Footerbar/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";


//Home 컴포넌트는 App 컴포넌트 대용으로 모든 컴포넌트를 넣어주기 위한 컴포넌트
// isRight로 css값 변화시켜주기 위한 것.
// toggle을 사용하여 클릭 시 상태값이 변경될 수 있도록
const Home = () => {
  // 리덕스의 스테이츠를 불러오는 횟수 제한
  const [dataTag, setTag] = useState([]);
  const [dataFollower, setFollower] = useState([]);

  const history = useHistory();

  useEffect(() => {

    console.log('axios 부르기---------------->');
    axios.get('http://localhost:5000/main')
      .then(data => {
        console.log("mark1 Data : ",data.data.mark1);
        setTag(["ok"])
        // setTag([...dataTag, ...dataTag_sample])
        const mark1Data = [];

        data.data.mark1.forEach((ele) => {
          mark1Data.push({
            id : ele.id,
            user_id : ele.user_id,
            tag_name : ele.tag_name,
            title : ele.title
          });
        });

        setTag([...mark1Data]);


      })
      .catch(err => console.log(err))
      .finally(() => console.log("axios GET finish"));

    // console.log('axios 부르기---------------->');
    // axios.get('http://localhost:5000/', {
    //   // withCredentials: true
    // })
    //   .then((res) => {
    //     console.log(res)
    //     history.push("/")
    //   })
    //   .catch(err => console.log(err))
    //   .finally(() => console.log("axios GET finish"));

    
    // dataTag_sample,dataFollower_sample은 테스트를 위한 더미데이터임, axios사용시 주석 or 제거해야함
    // let dataTag_sample = [
    //   {
    //     id: 0,
    //     title : '11',
    //     tag_name : '22'
    //   },
    //   {
    //     id: 1,
    //     title : '33',
    //     tag_name : '22'
    //   },
    //   {
    //     id: 3,
    //     title : '44',
    //     tag_name : '55'
    //   },
    //   {
    //     id: 4,
    //     title : '66',
    //     tag_name : '77'
    //   },
    //   {
    //     id: 5,
    //     title : '88',
    //     tag_name : '99'
    //   },
    // ];

    
    let dataFollower_sample = [
      {userId : 'aaa', Like : 1},
      {userId : 'bbb', Like : 2},
      {userId : 'ccc', Like : 3},
      {userId : 'ddd', Like : 4}
    ];
    setFollower([...dataFollower_sample])

  }, []);

  const [isRight, setIsRight] = useState(false);

  const toggle = () => {
    setIsRight(!isRight);
  };>>>>>>> dev
61
    

  return (
    <>
      <Sidebar isRight={isRight} toggle={toggle} />
      <Switch>
        <Route path="/main">
          <Navbar toggle={toggle} />
          <Cover />
          <ChallengeList dataTag={dataTag}/>
          <ChallengerList dataFollower={dataFollower}/>
          <Footer />
        </Route>
      </Switch>
    </>
  );
};


export default Home;


// 