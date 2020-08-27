import { INCREMENT, DECREMENT } from './action-type.jsx'

export const increment = (number) => ({type: INCREMENT, data: number})
export const decrement = (number) => ({type: DECREMENT, data: number})

export const incrementAsync = (number) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(number))
    }, 1000)
  }
}
