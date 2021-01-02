import {_saveQuestionAnswer } from '../utils/_DATA'

export const SET_USERS = 'SET_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  }
}


function saveAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer({authedUser, qid, answer})
      .then(() => {
        dispatch(saveAnswer(authedUser, qid, answer))
      })
  }
}
