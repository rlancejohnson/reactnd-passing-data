import React, { Component } from 'react'

export default class UserFavMovies extends Component {
    usersFavMovies = this.props.users.map(user => (
      `${user.name}'s favorite movie is ${
        this.props.movies.filter(movie => (
            movie.id === this.props.profiles.filter(profile => (
              profile.userID === user.id
            ))[0].favoriteMovieID
          ))[0]
        }`
    ))
  
    render() {
      return (
        <ol>
          {this.usersFavMovies.map(userFavMovie => 
            <li>{userFavMovie}</li>
          )}
        </ol>
      )
    }
  }