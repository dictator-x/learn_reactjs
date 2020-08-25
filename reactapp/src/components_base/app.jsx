import React, { Component } from 'react'
import logo from './logo.svg'
import './app.css'

export default class App extends Component {

  render() {
    return (
      <div>
        <img className='logo' src={logo} alt='logo' />
        <p className='title'>react app component</p>
      </div>
    )
  }
}
