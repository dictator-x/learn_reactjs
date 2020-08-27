import React, { Component } from 'react'

export default class App extends Component {

  state = {
    count: 2
  }

  increment = () => {
    const number = this.select.value*1
    const count = this.state.count + number

    this.setState({count})
  }

  decrement = () => {
    const number = this.select.value*1
    const count = this.state.count - number
    this.setState({count})
  }

  incrementIfOdd = () => {
    const number = this.select.value*1
    const count = this.state.count + number

    if ( count % 2 === 1 ) {
      this.setState({count})
    }
  }

  incrementAsync = () => {
    const number = this.select.value*1
    const count = this.state.count + number

    setTimeout(() => {
      this.setState({count})
    }, 1000)

  }
  render() {
    const { count } = this.state
    return (
      <div>
        <p>click {count} time</p>
        <div>
        <select ref={select => this.select = select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>&nbsp;
        </div>
      </div>
    )
  }
}
