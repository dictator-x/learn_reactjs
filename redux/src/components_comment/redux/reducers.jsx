import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENT } from './action-types.jsx'
import { combineReducers } from 'redux'

function comments(oldState=[], action) {
  switch ( action.type ) {
  case ADD_COMMENT:
    return [action.data, ...oldState]
  case DELETE_COMMENT:
    return oldState.filter((comment, index) => index !== action.data)
  case RECEIVE_COMMENT:
    return action.data
  default:
    return oldState
  }
}

function counter(oldstate=0, action) {
  console.log(action)
  return oldstate
}

export default combineReducers({
    counter,
    comments
})
