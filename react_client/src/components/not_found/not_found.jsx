import React, { Component } from 'react'
import { Button } from 'antd-mobile'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Sorry, Page Not Found!</h2>
          <Button type="primary" onClick={() => this.props.history.replace("/")}>Main Page</Button>
        </div>
      </div>
    )
  }
}
