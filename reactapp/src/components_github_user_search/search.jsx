import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {

  static propTypes = {
    setSearchName: PropTypes.func.isRequired
  }

  search = () => {
    const searchName = this.searchInput.value.trim()
    if ( searchName ) {
      this.props.setSearchName(searchName)
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            ref = { searchInput => this.searchInput = searchInput }
          />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
