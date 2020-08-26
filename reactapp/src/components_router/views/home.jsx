import React, { Component } from 'react'
import Link from '../components/Link.jsx'
import { Switch, Route, Redirect } from 'react-router-dom'
import News from './news.jsx'
import Message from './message.jsx'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>home route component</h2>
        <div>

          <ul className="nav nav-tabs">
            <li>
              <Link to='/home/news'>News</Link>
            </li>
            <li>
              <Link to='/home/message'>Message</Link>
            </li>
          </ul>

          <div>
            <Switch>
              <Route path='/home/news' component={News}></Route>
              <Route path='/home/message' component={Message}></Route>
              <Redirect to='/home/news' />
            </Switch>
          </div>

        </div>
      </div>
    )
  }
}

