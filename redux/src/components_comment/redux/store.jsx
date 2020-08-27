import { createStore, applyMiddleware } from 'redux'
import { comments } from './reducers.jsx'
import thunk from 'redux-thunk'

export default createStore(
  comments,
  applyMiddleware(thunk)
)
