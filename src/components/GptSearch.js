import React from 'react'
import { NetBackGround } from '../utilit/photos'
import GPTSearchBar from './GPTSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
    
  return (
    <div className='flex justify-center pt-20 '>
        <img 
          src={NetBackGround} alt=''
          className='w-screen h-screen '/>

        <GPTSearchBar/>
        {/* <GptMovieSuggestions/> */}
        
    </div>
  )
}

export default GptSearch