import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  List,
  Badge
} from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

class Message extends Component {

  getLastMsgs(chatMsgs, userid) {
    const lastMsgsObj = {}

    chatMsgs.forEach(msg => {
      if( msg.to === userid && ! msg.read ) {
        msg.unReadCount = 1
      } else {
        msg.unReadCount = 0
      }

      const chatId = msg.chat_id
      const lastMsg = lastMsgsObj[chatId]
      if (! lastMsg ) {
        lastMsgsObj[chatId] = msg
      } else {
        const unReadCount = lastMsg.unReadCount + msg.unReadCount

        if ( msg.create_time > lastMsg.create_time ) {
          lastMsgsObj[chatId] = msg
        }
        lastMsgsObj[chatId].unReadCount = unReadCount
      }
    })

    const lastMsgs = Object.values(lastMsgsObj)
    lastMsgs.sort(function(m1, m2) {
      return m2.create_time - m1.create_time
    })

    return lastMsgs

  }

  render() {
    const { user } = this.props
    const { users, chatMsgs } = this.props.chat

    const lastMsgs = this.getLastMsgs(chatMsgs, user._id)

    return (
      <List style={{marginTop: 50, marginBottom: 50}}>
      {
        lastMsgs.map(msg => {
          const targetUser = msg.to === user._id ? users[msg.from] : users[msg.to]
          const targetUserId = msg.to === user._id ?  msg.from : msg.to

          return (
            <Item
            key = { msg._id }
            extra = { <Badge text={ msg.unReadCount } /> }
            thumb = { targetUser.avatar ? require(`../../assets/images/${targetUser.avatar}.svg`) : null }
            arrow = 'horizontal'
            onClick={ () => this.props.history.push(`/chat/${targetUserId}`) }
            >
            {msg.content}
            <Brief>{targetUser.username}</Brief>
            </Item>
          )
        })
      }
      </List>
    )
  }
}

export default connect(
  state => ({
    user: state.user,
    chat: state.chat
  }),
  {

  }
)(Message)
