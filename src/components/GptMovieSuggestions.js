import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const GptMovieSuggestions = () => {
  const movie = useSelector(store => store.gpt)
  const { movieName, movieResults } = movie
  console.log(movieResults)

  if(!movieName) return null ;

  return (
    <div className=' w-3/4 absolute pt-64 ' >
      <div>

        {movieName.map( ( movie, index ) => 

          <MovieList 
            key={movie} 
            title={movie} 
            movies={movieResults[index].results}
          />

         )}
      </div>
    </div>
  )
}

export default GptMovieSuggestions