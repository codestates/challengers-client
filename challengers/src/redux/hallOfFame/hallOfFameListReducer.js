import {CALL_HALL_OF_FAME_LIST} from './hallOfFameListTypes';

const initialState = [];
let data = [];



const reducerHallOfFameList = (state = initialState, action) => {  

    switch(action.type){
        case CALL_HALL_OF_FAME_LIST :
            console.log('axios_CALLHALLOFFAMELIST_GET');
            // data는 더미데이터, axios으로 요청해야함
            data = [{
                      id: 1,
                      user_id : 'Alex'
                    },
                    {
                      id: 2,
                      user_id : 'Alex-Choi'
                    },
                    {
                      id: 3,
                      user_id : 'Alex?'
                    },
                    {
                      id: 4,
                      user_id : '라라라'
                    }];
     return [
      ...data
     ]

        default : return state;
    }
}

export default reducerHallOfFameList;