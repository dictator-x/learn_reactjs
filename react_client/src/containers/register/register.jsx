import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'
import { Redirect } from 'react-router-dom'

import Logo from '../../components/logo/logo.jsx'
import { connect } from 'react-redux'
import { register } from '../../redux/actions.js'

const ListItem = List.Item

class Register extends Component {

  state = {
    username: '',
    password: '',
    rePassword: '',
    type: 'personal'
  }

  register = () => {
    this.props.register(this.state)
  }

  handleChange  = (key, val) => {
    // this.state[key] = val
    this.setState({
      [key]: val
    })
  }

  toLogin = () => {
    this.props.history.replace('/login')
  }

  render() {
    const { type } = this.state
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
            <InputItem type="password" onChange={val => {this.handleChange('rePassword', val)}}>Re-type:</InputItem>
            <WhiteSpace />

            <ListItem>
            <span>Account Type:</span>&nbsp;
            <Radio checked={type === 'personal' ? true : false} onChange={() => this.handleChange('type', 'personal')}>personal</Radio>&nbsp;&nbsp;
            <Radio checked={type === 'business' ? true : false} onChange={() => this.handleChange('type', 'business')}>business</Radio>&nbsp;&nbsp;
            </ListItem>
            <WhiteSpace />
            <Button type='primary' onClick={this.register}>Sign Up</Button>
            <WhiteSpace />
            <Button onClick={this.toLogin}>Login In</Button>
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
    register
  }
)(Register)
