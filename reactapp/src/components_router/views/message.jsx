import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MessageDetail from '../views/message_detail.jsx'
import Link from '../components/Link.jsx'

export default class Message extends Component {
  state = {
    messages: []
  }

  componentDidMount() {
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 2, title: 'message002'},
        {id: 3, title: 'message003'},
      ]
      this.setState({messages})
    }, 1000)
  }

  showDetail = (id) => {
    this.props.history.push(`/home/message/messagedetail/${id}`)
    // this.props.history.replace(`/home/message/messagedetail/${id}`)
  }

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }
  forwardToGoogle = () => {
    window.location = 'http://www.baidu.com'
  }

  render() {
    return (
      <div>
        <ul>
        {
          this.state.messages.map((m, index) => (
            <li key={index}>
              <Link to={`/home/message/messagedetail/${m.id}`}>{m.title}</Link>
              &nbsp;&nbsp;
              <button onClick={() => this.showDetail(m.id)}>check</button>
            </li>
          ))
        }
        </ul>
        <p>
          <button onClick={this.back}>Back</button>
          <button onClick={this.forward}>Forward</button>
        </p>
        <p><button onClick={this.forwardToGoogle}>Page Jump</button></p>
        <Route path='/home/message/messagedetail/:id' component={MessageDetail}/>
      </div>
    )
  }
}
