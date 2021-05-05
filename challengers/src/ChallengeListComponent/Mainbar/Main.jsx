import React from "react";
import Challenge from "./Challenge";
import Cover1 from "../Video/Cover1";
import {
  MainContainer,
  MainHashTag,
  MainChallengeList,
  MainList
} from "./MainElements";

import { connect } from "react-redux"; // react, redux연결
import {mapStateToProps,mapDispatchToProps} from "../../redux/components/getAndEdit_State";

const Main = (props) => {
  console.log("------------->Main Props : ", props);

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

// const mapStateToProps = (state) => {
//   console.log("mapStateToProps(My Challenge List) : ", state);
//   return {
//     myChallengeList: state.myChallengeList
//   };
// };

export default connect(mapStateToProps)(Main);
