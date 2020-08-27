import React, { Component } from 'react'
import CommentAdd from '../comment_add/comment_add'
import CommentList from '../comment_list/comment_list'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addComment, deleteComment, getComments } from '../redux/actions.jsx'

class App extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired

  }

  componentDidMount() {
    this.props.getComments()
  }

  render() {
    const { comments, addComment, deleteComment} = this.props
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
          <CommentAdd addComment={addComment}/>
          <CommentList deleteComment={deleteComment} comments={comments}/>
        </div>
      </div>
    )
  }

}

export default connect(
  state => ({comments: state.comments}),
  { addComment, deleteComment, getComments }
)(App)
