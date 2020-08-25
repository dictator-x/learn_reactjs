import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './comment_item.css'

export default class CommentItem extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  handleDelete = () => {
    const { deleteComment, index } = this.props
    deleteComment(index)
  }

  render() {
    const { username, content } = this.props.comment
    return (
      <li className="list-group-item">
        <div className="handle">
        <button className="pull-right" onClick={this.handleDelete}>delete</button>
        </div>
        <p className="user">
          <span>{username} </span>
          <span>say:</span>
        </p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}
