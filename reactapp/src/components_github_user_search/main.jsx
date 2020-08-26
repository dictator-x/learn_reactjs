import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Main extends Component {

  state = {
    initView: true,
    loading: false,
    users: null,
    error: null
  }

  static propTypes = {
    searchName: PropTypes.string.isRequired
  }

  componentWillReceiveProps(newProps) {
    const { searchName } = newProps
    this.setState({initView: false, loading: true})

    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
    .then(response => {
      const result = response.data
      const users = result.items.map((item) => ({name: item.login, url: item.html_url, avatarUrl: item.avatar_url}))
      this.setState({loading: false, users})
    })
    .catch(error => {
        this.setSate({loading: false, error: error.message})
    })
  }

  render() {
    const { initView, loading, users, error } = this.state
    if ( initView ) {
      return <h2>Please input searching key</h2>
    } else if ( loading ) {
      return <h2>Loading...</h2>
    } else if ( error ) {
      return <h2>{error}</h2>
    } else {
      return (
        <div className="row">
          {
            users.map((user, index) => {
              return (
                <div className="card" key={index}>
                  <a href={ user.url } rel="noopener noreferrer" target="_blank">
                    <img src={ user.avatarUrl } style={{width: 100}} alt="Loading" />
                  </a>
                  <p className="card-text">{ user.name }</p>
                </div>
              )
            })
          }
        </div>
      )
    }
  }
}
