import React, {useState} from "react";
import image from "../../images/image1.svg";
import { useHistory } from "react-router-dom";
import {
  ChallengeListContainer,
  ChallengeImg,
  Img,
  ChallengeWrapper,
  ChallengeListTitle,
  ChallengeListCardGroup,
  ChallengeCard,
  ChallengeTag,
  ChallengeHashTag
} from "./ChallengeListElements";
import { connect } from "react-redux"; // react, redux연결
import {mapStateToProps,mapDispatchToProps} from "../../redux/components/getAndEdit_State";

// 메인화면의 Challenge List를 출력한다.
const ChallengeList = (props) => {
  console.log("ChallengeList------> : ", props);
  const history = useHistory();

  return (
    <ChallengeListContainer>
      <ChallengeImg>
        <Img src={image} />
      </ChallengeImg>
      <ChallengeWrapper>
        <ChallengeListTitle>Challenge List</ChallengeListTitle>
        <ChallengeListCardGroup>
          {props.dataTag.map((ele) => {
            return (
              <ChallengeCard
                key={"tag" + String(ele.id)}
                onClick={() => {
                  history.push("/tag");
                  props.getMyChallengeList(ele.tag_name);
                }}
              >
                <ChallengeTag>{ele.title}</ChallengeTag>
                <ChallengeHashTag># {ele.tag_name}</ChallengeHashTag>
              </ChallengeCard>
            );
          })}
        </ChallengeListCardGroup>
      </ChallengeWrapper>
    </ChallengeListContainer>
  );
};

// const mapStateToProps = (state) => {
//   console.log("mapStateToProps(My Challenge List) : ", state);
//   return {
//     myChallengeList: state.myChallengeList
//   };
// };



export default connect(mapStateToProps,mapDispatchToProps)(ChallengeList);

// <ChallengeCard>
//             <ChallengeTag>CHALLENGE TAG</ChallengeTag>
//             <ChallengeHashTag># CHALLENGE!</ChallengeHashTag>
// </ChallengeCard>

// export default ChallengeList;
