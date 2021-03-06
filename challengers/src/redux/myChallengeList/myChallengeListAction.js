import { CALL_MY_CHALLENGE_LIST,
    DELETE_MY_CHALLENGE_LIST,
    ADD_MY_CHALLENGE_LIST } from './myChallengeListTypes'


export const getMyChallengeList = (tag) => {
    return {
        type : CALL_MY_CHALLENGE_LIST,
        payload : tag
    }
}

export const deleteMyChallengeList = () => {
    return {
        type : DELETE_MY_CHALLENGE_LIST
    }
}

export const addMyChallengeList = () => {
    return {
        type : ADD_MY_CHALLENGE_LIST
    }
}

