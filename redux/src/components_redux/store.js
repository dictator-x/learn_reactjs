import { createStore } from 'redux'
import { counter } from './reducers.jsx'

const store = createStore(counter)
export default store
