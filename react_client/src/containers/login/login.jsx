import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../redux/actions.js'
import Logo from '../../components/logo/logo.jsx'

class Login extends Component {

  state = {
    username: '',
    password: '',
  }

  loginIn = () => {
    this.props.login(this.state)
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

    const { msg, redirectTo } = this.props.user
    if ( redirectTo ) {
      return <Redirect to={redirectTo} />
    }

    return (
      <div>
        <NavBar>XRW</NavBar>
        <Logo />
        <WingBlank>
          <List>
            { msg ? <div className='error-msg'>{msg}</div> : null }
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

export default connect(
  state => ({
    user: state.user
  }),
  {
    login
  }
)(Login)
