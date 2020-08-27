import { ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENT } from './action-types.jsx'

export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})

const receiveComments = (comments) => ({type: RECEIVE_COMMENT, data: comments})

export const getComments = () => {
  return dispatch => {
    setTimeout(()=> {
      const comments = [
        { username: 'Messi', content: 'goal' },
        { username: 'Jordan', content: 'jump' }
      ]
      dispatch(receiveComments(comments))
    }, 1000)
  }
}
