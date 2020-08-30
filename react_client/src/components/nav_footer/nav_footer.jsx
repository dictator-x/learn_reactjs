import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { TabBar } from 'antd-mobile'

const Item = TabBar.Item

class NavFooter extends Component {

  static propTypes = {
    navList: PropTypes.array.isRequired
  }

  render() {
    let { navList } = this.props
    navList = navList.filter(nav => ! nav.hide)
    const path = this.props.location.pathname

    return (
      <TabBar>
        {
          navList.map((nav, index) => (
            <Item
              key={nav.path}
              title={nav.text}
              icon={{uri: require(`./images/${nav.icon}.png`)}}
              selectedIcon={{uri: require(`./images/${nav.icon}_select.png`)}}
              selected={path===nav.path}
              onPress={() => this.props.history.replace(nav.path)}
            ></Item>
          ))
        }
      </TabBar>
    )
  }
}

export default withRouter(NavFooter)
