import { _getUsers, _getQuestions } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setUsers } from './users'
import { setQuestions } from './questions'

function getInitialData() {
 return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }))
}

export default function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      dispatch(setUsers(users))
      dispatch(setQuestions(questions))
      dispatch(hideLoading())
    })
  }
}
