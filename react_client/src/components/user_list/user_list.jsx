import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  WingBlank,
  WhiteSpace
} from 'antd-mobile'

import './user_list.less'

const Header = Card.Header
const Body = Card.Body

export default class UserList extends Component {

  static propTypes = {
    userList: PropTypes.array.isRequired
  }

  render() {
    const { userList } = this.props

    return (
      <WingBlank style={{ marginBottom: 50, marginTop: 50 }}>
      {
        userList.map(user => (
          <div key={ user._id }>
            <WhiteSpace />
            <Card>
              <Header
                thumb = { require(`../../assets/images/${user.avatar}.svg`) }
                extra = { user.username }
              />
              <Body>
                <div>Email: { user.email }</div>
                <div>Name: { user.name }</div>
                <div>Phone: { user.phone }</div>
                { user.address ? <div>Address: { user.address }</div> : null }
              </Body>
            </Card>
          </div>
        ))
      }
      </WingBlank>
    )
  }
}
