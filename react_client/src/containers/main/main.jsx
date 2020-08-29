import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

import BusinessInfo from '../business_info/business_info.jsx'
import PersonalInfo from '../personal_info/personal_info.jsx'
import Business from '../business/business.jsx'
import Person from '../person/person.jsx'
import Personal from '../personal/personal.jsx'
import Message from '../message/message.jsx'
import NotFound from '../../components/not_found/not_found.jsx'

import { getRedirectTo } from '../../utils'
import { getUser } from '../../redux/actions.js'


class Main extends Component {

  navList = [
    {
      path: '/person',
      component: Person,
      title: 'Person List',
      icon: 'person',
      text: 'person'
    },
    {
      path: '/business',
      component: Business,
      title: 'Business List',
      icon: 'business',
      text: 'business'
    },
    {
      path: '/message',
      component: Message,
      title: 'Message',
      icon: 'message',
      text: 'message'
    },
    {
      path: '/personal',
      component: Personal,
      title: 'Personal Info',
      icon: 'personal',
      text: 'personal'
    }
  ]

  componentDidMount() {
    const userid = Cookies.get('userid')
    const { _id } = this.props.user
    if ( userid && ! _id ) {
      this.props.getUser()
    }
  }

  render() {
    const userid = Cookies.get('userid')
    if ( ! userid ) {
      return <Redirect to='/login' />
    }
    const { user } = this.props

    if ( ! user._id ) {
      return null
    } else {
      let path = this.props.location.pathname
      if ( path === '/' ) {
        path = getRedirectTo(user.type, user.header)
        return <Redirect to={path} />
      }
    }

    return (
      <div>
        <Switch>
          <Route path='/personalinfo' component={PersonalInfo} />
          <Route path='/businessinfo' component={BusinessInfo} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  {
    getUser
  }
)(Main)
