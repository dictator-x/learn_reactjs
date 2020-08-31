import {
  reqRegister,
  reqLogin,
  reqUpdateUser,
  reqUser,
  reqUserList,
  reqChatMsgList,
  reqReadMsg
} from '../api'

import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST,
  RECEIVE_MSG,
  RECEIVE_MSG_LIST
} from './action-types.js'

import io from 'socket.io-client'

async function getMsgList(dispatch, userid) {
  initIO(dispatch, userid)
  const response = await reqChatMsgList()
  const result = response.data
  if ( result.code === 0 ) {
    const { users, chatMsgs } = result.data
    dispatch(receiveMsgList({users, chatMsgs}))

  }
}

function initIO(dispatch, userid) {
  if ( ! io.socket ) {
    const URL = 'ws://localhost:8080'
    io.socket = io(URL)
    io.socket.on('receiveMsg', function(chatMsg) {
      console.log('receive from server: ', chatMsg)
      if ( userid === chatMsg.from || userid === chatMsg.to ) {
        dispatch(receiveMsg(chatMsg))
      }
    })
  }
}
export const sendMsg = ({from, to, content}) => {
  return dispatch => {
    console.log('send message', {from, to, content})
    // initIO()
    io.socket.emit('sendMsg', {from, to, content})
  }
}


const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})
const receiveUser = (user) => ({type: RECEIVE_USER, data: user})
export const resetUser = (msg) => ({type: RESET_USER, data: msg})
const receiveUserList = (userList) => ({type: RECEIVE_USER_LIST, data: userList})
const receiveMsgList = ({users, chatMsgs}) => ({type: RECEIVE_MSG_LIST, data: {users, chatMsgs}})
const receiveMsg = (chatMsg) => ({type: RECEIVE_MSG, data: chatMsg})

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
      getMsgList(dispatch, result.data._id)
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
      getMsgList(dispatch, result.data._id)
      dispatch(authSuccess(result.data))
    } else {
      dispatch(errorMsg(result.data))
    }
  }
}

export const updateUser = (user) => {

  return async dispatch => {
    const response = await reqUpdateUser(user)
    const result = response.data
    if ( result.code === 0 ) {
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.data))
    }
  }
}

export const getUser = () => {
  return async dispatch => {
    const response = await reqUser()
    const result = response.data
    if ( result.code === 0 ) {
      getMsgList(dispatch, result.data._id)
      dispatch(receiveUser(result.data))
    } else {
      dispatch(resetUser(result.data))
    }
  }
}

export const getUserList = (type) => {
  return async dispatch => {
    const response = await reqUserList(type)
    const result = response.data
    //TODO: handle error case.
    dispatch(receiveUserList(result.data))
  }
}


