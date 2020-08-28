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

import Logo from '../../components/logo/logo.jsx'

const ListItem = List.Item

export default class Register extends Component {

  state = {
    username: '',
    password: '',
    rePassword: '',
    accountType: 'personal'
  }

  register = () => {
    console.log(this.state)
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
            <InputItem type="password" onChange={val => {this.handleChange('rePassword', val)}}>Re-type:</InputItem>
            <WhiteSpace />

            <ListItem>
            <span>Account Type:</span>&nbsp;
            <Radio checked={accountType === 'personal' ? true : false} onChange={() => this.handleChange('accountType', 'personal')}>personal</Radio>&nbsp;&nbsp;
            <Radio checked={accountType === 'business' ? true : false} onChange={() => this.handleChange('accountType', 'business')}>business</Radio>&nbsp;&nbsp;
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
