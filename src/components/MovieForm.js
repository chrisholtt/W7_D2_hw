import React, { useState } from 'react'

const MovieForm = ({ onMovieSubmit }) => {

    const [movie, setMovie] = useState({
        name: '',
        url: ''
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        if (name === 'name') {
            setMovie((prev) => {
                return { ...prev, name: value }
            })
        } else {
            setMovie((prev) => {
                return { ...prev, url: value }
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = movie.name;
        const url = movie.url

        if (!name || !url) {
            return
        }

        onMovieSubmit({
            name: name,
            url: url
        })

        setMovie({ name: '', url: '' });
    }

    return (
        <div className='center'>
            <form onSubmit={handleSubmit} className='movie-form'>
                <h3 style={{ color: 'white' }}>Add new movie:</h3>
                <input name='name' type="text" placeholder='Movie title...' onChange={handleChange} value={movie.name} required className='rounded-form-inputs' />
                <input name='url' type="text" placeholder='imdb url' onChange={handleChange} value={movie.url} required className='rounded-form-inputs' />
                <input type="submit" value='✅' className='rounded-form-inputs' />
            </form>
        </div>
    )
}

export default MovieForm