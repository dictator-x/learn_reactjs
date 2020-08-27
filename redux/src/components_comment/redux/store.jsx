import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers.jsx'
import thunk from 'redux-thunk'

export default createStore(
  reducers,
  applyMiddleware(thunk)
)
