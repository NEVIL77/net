import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ( { title, movies } ) => {

    return (
        movies && 
        <div className='px-6'>

            <h1 className='text-white py-4 text-2xl'> {title} </h1>

            <div className='flex overflow-x-scroll '>
                <div className='flex'>
                    { movies.map( movie =>  
                        < MovieCard key={movie.id}  poster={movie.poster_path} />) 
                    }
                </div>
            </div>

        </div>
        
    )
}

export default MovieList