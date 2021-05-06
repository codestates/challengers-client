import {getMyChallengeList,
    deleteMyChallengeList,
    addMyChallengeList} from '../../redux'; // redux의 Action

// Redux State상태 갖고오기!
export const mapStateToProps = state => {//
    console.log('mapStateToProps(My Challenge List) : ', state);
    return {
        myChallengeList : state.myChallengeList,
        // hallOfFameList : state.hallOfFameList
    }
  }
  
export const mapDispatchToProps = dispatch => { // 버튼에 영향
    return {
        // My Challenge List를 GET한다 API 문서 4번
        getMyChallengeList : (tag) => {
            dispatch(getMyChallengeList(tag));
        },
        deleteMyChallengeList : () => {
            dispatch(deleteMyChallengeList());
        },
        addMyChallengeList : () => {
            dispatch(addMyChallengeList());
        },
        // // Home 페이지의 Hall of Fame 부분 API문서 확인해야함
        // getHallOfFameList : () => {
        //     dispatch(getHallOfFameList());
        // }
    }
  }