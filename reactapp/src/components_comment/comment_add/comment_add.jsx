import React, { Component } from 'react'

export default class CommendAdd extends Component {

  render() {
    return (
      <div className="col-md-4">
        <foam className="form-horizontal">
        <div className="form-group">
          <label>username</label>
          <input className="form-control" type="text" placeholder="username" />
        </div>
        <div className="form-group">
          <label>Comment Content</label>
          <textarea className="form-control" rows="6" placeholder="content"></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="button" className="btn btn-default pull-right">Submit</button>
          </div>
        </div>
        </foam>
      </div>
    )
  }
}
