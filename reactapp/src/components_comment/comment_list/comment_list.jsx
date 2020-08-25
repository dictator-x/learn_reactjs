import React, { Component } from 'react'
import './commentList.css'

export default class CommentList extends Component {

  render() {
    return (
      <div className="col-md-8">
        <h3 className="reply">Comment Reply: </h3>
        <h2 style={ {display: 'none'} }>Click left to add a comment</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="handle">
              <a href="javascript:;">delete</a>
            </div>
            <p className="user">
              <span>xxx </span>
              <span>say:</span>
            </p>
            <p className="centence">React is Good</p>
          </li>
          <li className="list-group-item">
            <div className="handle">
              <a href="javascript:;">delete</a>
            </div>
            <p className="user">
              <span>yyy</span>
              <span>say:</span>
            </p>
            <p className="centence">React is hard</p>
          </li>
        </ul>
      </div>
    )
  }
}
