import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo.jsx'

export default class Login extends Component {

  state = {
    username: '',
    password: '',
  }

  loginIn = () => {
    console.log(this.state)
  }

  handleChange  = (key, val) => {
    // this.state[key] = val
    this.setState({
      [key]: val
    })
  }

  toRegister = () => {
    this.props.history.replace('/register')
  }

  render() {
    const { accountType } = this.state

    return (
      <div>
        <NavBar>XRW</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={val => {this.handleChange('username', val)}}>Username:</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={val => {this.handleChange('password', val)}}>Password:</InputItem>
            <WhiteSpace />
            <Button type='primary' onClick={this.loginIn}>Login In</Button>
            <WhiteSpace />
            <Button onClick={this.toRegister}>Sign Up</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
