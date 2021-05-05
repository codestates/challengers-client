import React from "react";
import Challenge from "./Challenge";
import Cover1 from "../Video/Cover1";
import {
  MainContainer,
  MainHashTag,
  MainChallengeList,
  MainList
} from "./MainElements";
import axios from 'axios';

import { connect } from "react-redux"; // react, redux연결
import {mapStateToProps,mapDispatchToProps} from "../../redux/components/getAndEdit_State";

const Main = (props) => {

  const data = async () => {return await axios.get('http://localhost:5000/main')
  .then(async (res) => {return await res.data.mark1})
  .catch(err => console.log(err))
  .finally(() => console.log('http://localhost:5000/main GET Finish'));}

  console.log("Page Axios ---> ", data);

  return (
    <MainContainer>
      <MainHashTag>
        {}
      </MainHashTag>
      <MainChallengeList>
        <Cover1 />
        <MainList>
          {props.myChallengeList.map((data) => {
            console.log("MAinList : ", data);
            return <Challenge key={data.id} challenge={data.title} />;
          })}
        </MainList>
      </MainChallengeList>
    </MainContainer>
  );
};

// export default Main;

// {props.myChallengeList.map((data) => {
//   console.log("MAinList : ", data);
//   return <Challenge key={data.id} challenge={data.title} />;
// })}

export default connect(mapStateToProps)(Main);
