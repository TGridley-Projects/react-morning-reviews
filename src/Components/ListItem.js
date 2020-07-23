import React from 'react'

const ListItem = ({movie}) => {
    
    return <div className='ListItem'>
        <img alt={movie.title} className='movie-poster' src={movie.posterImg} />
        <div className='movie-info'>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
        </div>
    </div>
}

export default ListItem