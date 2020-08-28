import {
  reqRegister,
  reqLogin
} from '../api'

import {
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types.js'


const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})

export const register = (user) => {
  const { username, password, rePassword, type } = user

  if ( ! username || username === '' ) {
    return errorMsg("Username should not be empty.")
  }
  if ( ! password || password === '' ) {
    return errorMsg("Password should not be empty.")
  }
  if ( password !== rePassword ) {
    return errorMsg('Password do not match.')
  }

  return async dispatch => {
    const response = await reqRegister({username, password, type})
    const result = response.data
    if ( result.code === 0 ) {
      dispatch(authSuccess(result.data))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}

export const login = (user) => {

  const { username, password } = user

  if ( ! username || username === '' ) {
    return errorMsg("Username should not be empty.")
  }
  if ( ! password || password === '' ) {
    return errorMsg("Password should not be empty.")
  }

  return async dispatch => {
    const response = await reqLogin({username, password})
    const result = response.data
    if ( result.code === 0 ) {
      dispatch(authSuccess(result.data))
    } else {
      dispatch(errorMsg(result.data))
    }
  }
}
