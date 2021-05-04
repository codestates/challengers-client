import React from "react";
import image from "../../images/image1.svg";

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
import { connect } from 'react-redux'; // react, redux연결

const ChallengeList = (props) => {

  console.log('ChallengeList------> : ', props);

  return (
    <ChallengeListContainer>
      <ChallengeImg>
        <Img src={image} />
      </ChallengeImg>
      <ChallengeWrapper>
        <ChallengeListTitle>Challenge List</ChallengeListTitle>
        <ChallengeListCardGroup>
            {
              props.myChallengeList.map((ele) => {
                return(
                  <ChallengeCard key = {'tag'+String(ele.id)}>
                    <ChallengeTag >{ele.title}</ChallengeTag>
                    <ChallengeHashTag ># {ele.tag_name}</ChallengeHashTag>
                  </ChallengeCard>
                )
              })
            }
        </ChallengeListCardGroup>
      </ChallengeWrapper>
    </ChallengeListContainer>
  );
};

const mapStateToProps = state => {
  console.log('mapStateToProps(My Challenge List) : ', state);
  return {
      myChallengeList : state.myChallengeList
  }
}


export default connect(
  mapStateToProps
)(ChallengeList);

// <ChallengeCard>
//             <ChallengeTag>CHALLENGE TAG</ChallengeTag>
//             <ChallengeHashTag># CHALLENGE!</ChallengeHashTag>
// </ChallengeCard>

// export default ChallengeList;
