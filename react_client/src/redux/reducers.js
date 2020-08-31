import { combineReducers } from 'redux'

import {
  ERROR_MSG,
  AUTH_SUCCESS,
  RESET_USER,
  RECEIVE_USER,
  RECEIVE_USER_LIST,
  RECEIVE_MSG_LIST,
  RECEIVE_MSG
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

function userList(state=[], action) {
  switch ( action.type ) {
  case RECEIVE_USER_LIST:
    return action.data
  default:
    return state
  }
}

const initChat = {
  users: {},
  chatMsgs: [],
  unReadCount: 0
}

function chat(state=initChat, action) {
  switch ( action.type ) {
  case RECEIVE_MSG_LIST:
    const { users, chatMsgs } = action.data
    return {
      users,
      chatMsgs,
      unReadCount: 0
    }
  case RECEIVE_MSG:
    const chatMsg = action.data
    return {
      users: state.users,
      chatMsgs: [...state.chatMsgs, chatMsg],
      unReadCount: 0
    }
  default:
    return state
  }
}

export default combineReducers({
  user,
  userList,
  chat
})
