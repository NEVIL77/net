import React from 'react'
import { NetBackGround } from '../utilit/photos'
import GPTSearchBar from './GPTSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
    
  return (
    <div className='flex justify-center  '>
        <div className='fixed -z-10'>
          <img 
            src={NetBackGround} alt=''
            className=' h-screen flex-grow w-screen object-cover '
          />
        </div>
        <div className='flex justify-center' >

          <GPTSearchBar/>
          <GptMovieSuggestions/>
        
        </div>
    </div>
  )
}

export default GptSearch