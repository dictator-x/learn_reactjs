import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux'
import {
  NavBar,
  List,
  InputItem
} from 'antd-mobile'

import { sendMsg } from '../../redux/actions.js'

const Item = List.Item

class Chat extends Component {

  state = {
    content: ''
  }

  handleSend = () => {
    const from = this.props.user._id
    const to = this.props.match.params.userid
    const content = this.state.content.trim()

    if ( content ) {
      this.props.sendMsg({from, to, content})
      this.setState({content: ''})
    }
  }

  componentDidUpdate() {
    scroll.scrollToBottom();
  }

  render() {
    const { user } = this.props
    const { users, chatMsgs } = this.props.chat
    const myId = user._id
    if ( ! users[myId] ) {
      return null
    }
    const targetId = this.props.match.params.userid
    const chat_id = [myId, targetId].sort().join('_')
    const msgs = chatMsgs.filter( msg => msg.chat_id === chat_id )
    const targetAvatar = users[targetId].avatar
    const targetIcon =  targetAvatar ? require(`../../assets/images/${targetAvatar}.svg`) : null

    return (
      <div id="chat-page">
        <NavBar className='sticky_header'>iaa</NavBar>
        <List style={{ marginBottom: 50, marginTop: 50 }}>
          {
            msgs.map(msg => {
              if ( myId === msg.to ) {
                return (
                  <Item
                    key = { msg._id }
                    thumb = { targetIcon }
                  >
                  { msg.content }
                  </Item>
                )
              } else {
                return (
                  <Item
                    key = { msg._id }
                    className = 'chat-me'
                    extra = 'me'
                  >
                    { msg.content }
                  </Item>
                )
              }
            })
          }
        </List>
        <div className="am-tab-bar">
          <InputItem
            placeholder="New Message"
            value = { this.state.content }
            onChange = { val => this.setState({ content: val }) }
            extra = {
              <span onClick={this.handleSend}>send</span>
            }
          />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    user: state.user,
    chat: state.chat
  }),
  {
    sendMsg
  }
)(Chat)
