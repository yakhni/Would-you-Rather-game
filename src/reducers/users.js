import { SET_USERS } from '../actions/users'
import { SAVE_USER_ANSWER } from '../actions/users'
import { NEW_QUESTION } from '../actions/questions'

export default function users(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.users,
      }
    case SAVE_USER_ANSWER:
      const { authedUser, qid, answer } = action
      const newAnswers = Object.assign({}, state[authedUser].answers, { [qid]: answer })

      return {
        ...state,
        [authedUser] : {
          ...state[authedUser],
          answers: {
            ...newAnswers
          }
        }
      }
    case NEW_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.author] : {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      }
    default:
      return state
  }
}
