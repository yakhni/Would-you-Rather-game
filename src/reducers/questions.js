import { SET_QUESTIONS, NEW_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    default:
      return state
  }
}
