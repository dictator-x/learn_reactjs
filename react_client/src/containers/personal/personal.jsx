import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Result,
  List,
  WhiteSpace,
  Button
} from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

class Personal extends Component {
  render() {
    const { user } = this.props
    console.log(user)

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
          <Button type='warning'>Logout</Button>
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

  }
)(Personal)
