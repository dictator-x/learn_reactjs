import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserList from '../../components/user_list/user_list.jsx'
import { getUserList } from '../../redux/actions.js'

class Person extends Component {

  componentDidMount() {
    this.props.getUserList('personal')
  }

  render() {
    return (
      <UserList userList={ this.props.userList }/>
    )
  }
}

export default connect(
  state => ({
    userList: state.userList
  }),
  {
    getUserList
  }
)(Person)
