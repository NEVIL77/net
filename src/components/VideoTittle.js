import React from 'react'

const VideoTittle = ( { title, overview } ) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 absolute text-white '>
      <h1 className='text-3xl  font-bold'> {title} </h1>
      <p className=' my-4 w-2/4'> {overview} </p>
      <div>
        <button className=' font-bold bg-white text-black px-14 py-4 mt-6 rounded-lg hover:bg-opacity-70'> Play </button>
        <button className=' font-bold bg-slate-400 text-black px-14 py-4 ml-6 rounded-lg'> Get Info </button>
      </div>
    </div>
  )
}

export default VideoTittle 