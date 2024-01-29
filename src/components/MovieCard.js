import React from 'react'
import { IMG_CDN } from '../utilit/constants'

const MovieCard = ( { poster } ) => {
    return (
        <div className='w-48 pr-4'>
            <img  className='hover:border-white' src={IMG_CDN+ poster} alt='photos'/>
        </div>
    )
}

export default MovieCard