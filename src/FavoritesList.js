import React, { Component } from 'react'

export default class UserFavMovies extends Component {
    render() {
        let {users, profiles, movies} = this.props;

        return (
            <ul>
                {profiles.map(profile => (
                    <li key={profile.id}>
                        {users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}
                    </li>
                ))}
            </ul>
        )
    }
}