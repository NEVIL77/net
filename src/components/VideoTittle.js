import React from 'react'

const VideoTittle = ( { title, overview } ) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-3xl  font-bold'> {title} </h1>
      <p className=' my-4 w-3/4'> {overview} </p>
      <div>
        <button className=' font-bold bg-slate-400 px-14 py-4 m-10 rounded-lg'> Play </button>
        <button className=' font-bold bg-slate-400 px-14 py-4 rounded-lg'> Get Info </button>
      </div>
    </div>
  )
}

export default VideoTittle 