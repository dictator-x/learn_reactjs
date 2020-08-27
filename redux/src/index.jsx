import React from 'react'
import ReactDOM from 'react-dom'

// import store from './components_redux/store.js'
// import App from './components_redux/app.jsx'

// function render() {
//   ReactDOM.render(<App store={store} />, document.getElementById('root'))
// }
// render()
// store.subscribe(render)


// import store from './components_react_redux/store.js'
// import App from './components_react_redux/app.jsx'
// import { Provider } from 'react-redux'

// ReactDOM.render((
//   <Provider store={store}>
//     <App />
//   </Provider>
// ), document.getElementById('root'))

// import store from './components_react_redux_async/store.jsx'
// import App from './components_react_redux_async/app.jsx'
// import { Provider } from 'react-redux'

// ReactDOM.render((
//   <Provider store={store}>
//     <App />
//   </Provider>
// ), document.getElementById('root'))


import store from './components_comment/redux/store.jsx'
import App from './components_comment/app/app.jsx'
import { Provider } from 'react-redux'

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
