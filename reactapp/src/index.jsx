import React from 'react'
import ReactDOM from 'react-dom'
// import App from './components_comment/app/app'
// import App from './components_github_user_search/app.jsx'
// import App from './components_subpub/app.jsx'
import App from './components_router/components/app.jsx'
import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('root'))
