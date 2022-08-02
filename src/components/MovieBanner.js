import React, { useState } from 'react'
import Movie from './Movie'
import MovieForm from './MovieForm'
import '../App.css';

const MovieBanner = () => {
    const [movies, setMovies] = useState(
        [
            {
                id: 1,
                name: "Spider-Man: Into the Spider-Verse",
                url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
                id: 2,
                name: "Life Itself",
                url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
                id: 3,
                name: "Mary Queen of Scots",
                url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
                id: 4,
                name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
                id: 5,
                name: "Captain Marvel",
                url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
        ]
    )

    const movieItems = movies.map((movie) => {
        return (
            <Movie key={movie.id} name={movie.name} url={movie.url} id={movie.id} deleteMovie={(id) => deleteMovie(id)} />
        )
    })

    const addMovie = (newMovie) => {
        newMovie.id = Date.now();
        const updatedMovies = [...movies, newMovie]
        setMovies(updatedMovies)
    }

    const deleteMovie = (id) => {
        const newArr = [...movies]
        const filtered = newArr.filter((movie) => {
            if (movie.id === id) {
            } else {
                return movie
            }
        })
        setMovies(filtered)
    }

    return (
        <div className='center'>
            <div className='movie-banner'>
                <h1 className='movie-title'>🍿 Movie banner 🍿</h1>
                {movieItems}
                <MovieForm onMovieSubmit={(movie) => addMovie(movie)} />
            </div>
        </div>
    )
}

export default MovieBanner