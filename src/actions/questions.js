import { _saveQuestion } from '../utils/_DATA'

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const NEW_QUESTION = 'NEW_QUESTION'

export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions
  }
}

function newQuestion(question) {
  return {
    type: NEW_QUESTION,
    question
  }
}

export function handleNewQuestion(question) {
  return (dispatch) => {
    return _saveQuestion(question)
      .then((question) => dispatch(newQuestion(question)))
  }
}
