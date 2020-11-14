import React, { Component } from 'react'

export default class UserFavMovies extends Component {
  render() {
    return (
      <ol>
      {Object.values(this.props.users).map(user => (
       <li key={user.id}>
      {user.name}
      </li>
    ))}
  </ol>
)
}
}