import React, { Component } from 'react'
import {
  List,
  Grid
} from 'antd-mobile'
import PropTypes from 'prop-types'
import './avatar_selector.less'

export default class AvatarSelector extends Component {

  constructor(props) {
    super(props)
    this.headerList = []
    for ( let i = props.offset ; i < (props.offset + props.length) ; i++ ) {
      this.headerList.push({
          text: (i+'-cat').padStart(7, '0'),
        icon: require(`../../assets/images/${(i+'-cat.svg').padStart(11, '0')}`)
      })
    }
  }

  state = {
    icon: null
  }

  static propTypes = {
    setAvatar: PropTypes.func.isRequired
  }

  handleClick = ({text, icon}) => {
    console.log(text)
    this.setState({icon})
    this.props.setAvatar(text)
  }

  render() {
    const { icon } = this.state

    const listHeader = ! icon ? 'choose an avatar' : (
      <div>
        avatar: <img className="avatar" src={icon} alt="cat" />
      </div>
    )
    return (
      <List renderHeader={() => listHeader}>
        <Grid
          data={this.headerList}
          columnNum={5}
          hasLine={false}
          onClick={this.handleClick}
        />
      </List>
    )
  }
}
