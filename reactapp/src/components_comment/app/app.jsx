import React, { Component } from 'react'
import CommentAdd from '../comment_add/comment_add'
import CommentList from '../comment_list/comment_list'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      comments: [
        {
          username: 'Messi',
          content: 'Messi score'
        },
        {
          username: 'Jordan',
          content: 'Jordan score'
        }
      ]
    }
  }

  addComment = (comment) => {
    const { comments } = this.state
    comments.unshift(comment)
    this.setState({comments})
  }

  deleteComment = (index) => {
    const { comments } = this.state
    comments.splice(index, 1)
    this.setState({comments})
  }

  render() {
    const { comments } = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <p>Please input a comment</p>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={this.addComment}/>
          <CommentList deleteComment={this.deleteComment} comments={comments}/>
        </div>
      </div>
    )
  }

}
