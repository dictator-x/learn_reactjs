import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentItem from '../comment_item/comment_item'
import './commentList.css'

export default class CommentList extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired
  }

  render() {
    const { comments, deleteComment } = this.props
    const display = comments.length===0 ? 'block' : 'none'

    return (
      <div className="col-md-8">
        <h3 className="reply">Comment Reply: </h3>
        <h2 style={ {display} }>Click left to add a comment</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => {
              return <CommentItem deleteComment={deleteComment} comment={comment} key={index} index={index} />
            })
          }
        </ul>
      </div>
    )
  }
}
