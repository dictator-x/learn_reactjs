import { combineReducers } from 'redux'

import {
  ERROR_MSG,
  AUTH_SUCCESS,
  RESET_USER,
  RECEIVE_USER
} from './action-types.js'

import { getRedirectTo } from '../utils'

const initUser = {
  username: '',
  type: '',
  msg: '',
  redirectTo: ''
}

function user(state=initUser, action) {
  switch ( action.type ) {
  case AUTH_SUCCESS:
    const { type, avatar } = action.data
    return {...action.data, redirectTo: getRedirectTo(type, avatar)}
  case ERROR_MSG:
    return {...state, msg: action.data}
  case RECEIVE_USER:
    return action.data
  case RESET_USER:
    return {...initUser, msg: action.data}
  default:
    return state
  }
}

export default combineReducers({
  user
})
