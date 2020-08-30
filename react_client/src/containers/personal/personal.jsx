import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import { resetUser } from '../../redux/actions.js'

import {
  Result,
  List,
  WhiteSpace,
  Button,
  Modal
} from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

class Personal extends Component {

  logout = () => {
    Modal.alert('Logout', 'Confirm to Logout?', [
      {
        text: 'Cancel',
        onPress: () => {}
      },
      {
        text: 'Confirm',
        onPress: () => {
          console.log('aa')
          Cookies.remove('userid')
          this.props.resetUser()
        }
      }
    ])
  }

  render() {
    const { user } = this.props

    return (
      <div>
        <Result
        img = {<img src={require(`../../assets/images/${user.avatar}.svg`)} style={{width: 50}} alt="header" />}
        title = ''
        message = ''
        />

        <List renderHeader={() => 'info'}>
          <Item multipleLine>
            <Brief>Name: {user.name}</Brief>
            <Brief>Email: {user.email}</Brief>
            <Brief>Type: {user.type}</Brief>
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Button type='warning' onClick={this.logout}>Logout</Button>
        </List>
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  {
    resetUser
  }
)(Personal)
