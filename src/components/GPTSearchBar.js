import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utilit/languageConstants'
import { openai } from '../utilit/openai'
import { API_OPTIONS } from '../utilit/constants'
import { addGptMovieResults } from '../utilit/gptSlice'

const GPTSearchBar = () => {

// Hooks
  const searchText=useRef()

// Redux Things
  const configLan = useSelector( store => store.config.lang )
  const dispatch  = useDispatch() ;

// Functions
  const tmdb = async (movie)=> {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=true&language=en-US&page=1',  API_OPTIONS)
    const json = await data.json();

    return json ;
  }

// handle things
  const handlebtnClick = async ()=> {
    console.log("btn clicked")
    console.log(searchText.current.value)

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content:gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults?.choices){
      console.log("Data dont Found")
    }
    const moviesSuggested = gptResults?.choices[0]?.message?.content?.split(",") 

    const promiseArray = moviesSuggested.map( (movie) => tmdb(movie) )

    const tmdbResults = await Promise.all(promiseArray) ;

    console.log(tmdbResults) ;

    if(!searchText.current.value){
      dispatch(addGptMovieResults ({ movieResult :"", movieName   :""  }))
    }
    else{

      dispatch(
        addGptMovieResults ({ movieResult :tmdbResults , movieName   :moviesSuggested  })
      )
    }


  } 
  return (
    <div className='absolute pt-20 z-40'>
      <form onSubmit={ (e)=> e.preventDefault() }>
        
        <input 
            type='text'
            placeholder={lang[configLan].gptSearchPlaceholder}
            ref={searchText}
            className=' text-red-70 w-[1/2] p-2  m-2 mt-24  '
        ></input>

        <button className='bg-red-800 w-20 p-2 text-white'
                onClick={handlebtnClick}> {lang[configLan].search}</button>

      </form>
    </div>
  )
}

export default GPTSearchBar