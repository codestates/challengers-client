import { combineReducers } from 'redux';
import reducerMyChallengeList from './myChallengeList/myChallengeListReducer';

const rootReducer = combineReducers({
    myChallengeList : reducerMyChallengeList
});

export default rootReducer;