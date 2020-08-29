import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  NavBar,
  InputItem,
  TextareaItem,
  Button
} from 'antd-mobile'

import AvatarSelector from '../../components/avatar_selector/avatar_selector.jsx'
import { updateUser } from '../../redux/actions.js'

class BusinessInfo extends Component {

  state = {
    avatar: '',
    website: '',
    company: '',
    phone: '',
    address: ''
  }

  setAvatar = (avatar) => {
    this.setState({avatar})
  }

  handleChange = (key, value) => {
    this.setState({
      [ key ]: value
    })
  }

  save = () => {
    this.props.updateUser(this.state)
  }

  render() {
    const { avatar, type } = this.props.user
    if ( avatar ) {
      const path = '/' + type
      return <Redirect to={path} />
    }

    return (
      <div>
        <NavBar>Business Info</NavBar>
        <AvatarSelector setAvatar={this.setAvatar} offset={21} length={20}/>
        <InputItem onChange={ val => { this.handleChange('website', val) } }>Website: </InputItem>
        <InputItem onChange={ val => { this.handleChange('company', val) } }>Company: </InputItem>
        <InputItem onChange={ val => { this.handleChange('phone', val) } }>Phone: </InputItem>
        <TextareaItem title='Address:' rows={3} onChange={ val => { this.handleChange('address', val) } }></TextareaItem>
        <Button type='primary' onClick={ this.save }>Save</Button>
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  {
    updateUser
  }
)(BusinessInfo)
