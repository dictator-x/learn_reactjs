import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import About from '../views/about.jsx'
import Home from '../views/home.jsx'
import Link from './Link.jsx'
import './app.css'

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <Link className='list-group-item' to='/about'>About</Link>
              <Link className='list-group-item' to='/home'>Home</Link>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
