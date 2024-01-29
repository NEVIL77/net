import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

    const movies = useSelector( store => store.movies )

    return (
        movies && 
        <div className='bg-black '> 
            <div className='-mt-44 pl-0 relative z-20'>
                < MovieList title= { "now Playing Movies" } movies= { movies?.nowPlayingMovies } />
                < MovieList title= { "Top Rated Movies" } movies= { movies?.TopRatedMovies } />
                < MovieList title= { "Popular Movies" } movies= { movies?.PopularMovies } />

            </div>
        </div>
    )
}

export default SecondaryContainer