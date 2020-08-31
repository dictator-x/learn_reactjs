import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux'
import {
  NavBar,
  List,
  InputItem,
  Grid,
  Icon
} from 'antd-mobile'

import {
  sendMsg,
  readMsg
} from '../../redux/actions.js'

const Item = List.Item

class Chat extends Component {

  state = {
    content: '',
    isShow: false
  }

  handleSend = () => {
    const from = this.props.user._id
    const to = this.props.match.params.userid
    const content = this.state.content.trim()

    if ( content ) {
      this.props.sendMsg({from, to, content})
      this.setState({content: '', isShow: false})
    }
  }

  componentWillMount() {
    const emojis = [
      '😀','😀', '😀', '😀', '😀', '😀', '😀', '😀',
      '😀','😀', '😀', '😀', '😀', '😀', '😀', '😀',
      '😀','😀', '😀', '😀', '😀', '😀', '😀', '😀',
      '😀','😀', '😀', '😀', '😀', '😀', '😀', '😀',
      '😀','😀', '😀', '😀', '😀', '😀', '😀', '😀',
    ]

    this.emojis = emojis.map(emoji => ({text: emoji}))
  }

  componentDidMount() {
    scroll.scrollTo(document.body.scrollHeight)
  }

  componentWillUnmount() {
    const targetId = this.props.match.params.userid
    const myId = this.props.user._id
    this.props.readMsg(targetId, myId)

  }

  componentDidUpdate() {
    window.scroll(0, document.body.scrollHeight)
  }

  toggleShow = () => {
    console.log('aa')
    const isShow = !this.state.isShow
    this.setState({isShow})
    if ( isShow ) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 0)
    }
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
        <NavBar
          icon = { <Icon type='left'/> }
          className = 'sticky_header'
          onLeftClick = { () => this.props.history.goBack() }

        >
          {users[targetId].username}
        </NavBar>
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
            onFocus={() => this.setState({isShow: false})}
            placeholder="New Message"
            value = { this.state.content }
            onChange = { val => this.setState({ content: val }) }
            extra = {
              <span>
                <span onClick={ this.toggleShow } style={{marginRight:5}} role="img" aria-label="sheep">😍</span>
                <span onClick={this.handleSend}>send</span>
              </span>
            }
          />
          { this.state.isShow ? (
            <Grid
              data = { this.emojis }
              columnNum = { 8 }
              carouselMaxRow = { 4 }
              isCarousel = { true }
              onClick = {(item) =>{
                this.setState({content: this.state.content + item.text})
              }}
            />
          ) : null }
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
    sendMsg,
    readMsg
  }
)(Chat)
