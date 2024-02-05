import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utilit/languageConstants'

const GPTSearchBar = () => {

    const configLan = useSelector( store => store.config.lang )
  return (
    <div className='absolute'>
        <input 
            type='text'
            placeholder={lang[configLan].gptSearchPlaceholder}
            
            className=' text-white w-[1/2] p-2  m-2 mt-24'
        ></input>
        <button className='bg-red-800 w-20 p-2 text-white'> {lang[configLan].search}</button>
    </div>
  )
}

export default GPTSearchBar