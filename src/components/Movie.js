import React from 'react'

const Movie = ({ name, url, id, deleteMovie }) => {

    const handleDelete = (id) => {
        deleteMovie(id)
    }


    return (
        <>
            <div className='movie'>
                <div className='movie-content'>
                    <h3>📼 {name} 📼</h3>
                    <a href={url} target='_blank' className='movie-links'>Take me to imdb</a>
                    <div className='movie-actions'>
                        <button onClick={() => handleDelete(id)}>🗑</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie