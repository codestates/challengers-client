import {
  CALL_MY_CHALLENGE_LIST,
  DELETE_MY_CHALLENGE_LIST,
  ADD_MY_CHALLENGE_LIST
} from "./myChallengeListTypes";

const initialState = [];
let data = [];

const reducerMyChallengeList = (state = initialState, action) => {
  switch (action.type) {
    case CALL_MY_CHALLENGE_LIST:
      console.log("axios_MYCHALLENGELIST_GET");
      // data는 더미데이터, axios으로 요청해야함
      data = [
        {
          user_id: 1,
          id: 1,
          title: "finally I did",
          tag_name: "prove",
          body: "{content : breathing, date : today}",
          like: 7777
        },
        {
          user_id: 2,
          id: 2,
          like: 88,
          title: "catch me if you can",
          tag_name: "prove",
          body: "{content : hacking, date : tomorrow}"
        },
        {
          user_id: 3,
          id: 12,
          like: 18,
          title: "I am best",
          tag_name: "brag",
          body: "{content : appearance, date : 1year}"
        },
        {
          user_id: 4,
          id: 22,
          like: 828,
          title: "coding god",
          tag_name: "coding",
          body: "{content : coding, date : whole life}"
        }
      ];
      return [...data];

    case DELETE_MY_CHALLENGE_LIST:
      data = state.slice(0, -1);
      console.log("DELETE_MY_CHALLENGE_LIST : ", data);

      return [...data];
    case ADD_MY_CHALLENGE_LIST:
      const data1 = {
        user_id: 4,
        id: state.length,
        like: 828,
        title: "Happy",
        tag_name: "coding",
        body: "{content : coding, date : whole life}"
      };
      console.log("DELETE_MY_CHALLENGE_LIST : ", data);

      return [...state, data1];

    default:
      return state;
  }
};

export default reducerMyChallengeList;
