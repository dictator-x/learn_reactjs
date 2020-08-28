import { combineReducers } from 'redux'

import {
  ERROR_MSG,
  AUTH_SUCCESS
} from './action-types.js'

const initUser = {
  username: '',
  type: '',
  msg: '',
  redirectTo: ''
}

function user(state=initUser, action) {
  switch ( action.type ) {
  case AUTH_SUCCESS:
    return {...action.data, redirectTo: '/'}
  case ERROR_MSG:
    console.log(action)
    console.log({...state, msg: action.data})
    return {...state, msg: action.data}
  default:
    return state
  }
}

export default combineReducers({
  user
})
