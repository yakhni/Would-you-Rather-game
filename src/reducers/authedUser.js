import { SET_AUTH_USER } from '../actions/authedUser'

export default function authedUser(state='', action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.authedUser
    default:
      return state
  }
}
