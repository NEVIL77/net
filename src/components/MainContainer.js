import React from 'react'
import VideoTittle from './VideoTittle'
import VideoBackGround from './VideoBackGround'
import { useSelector } from 'react-redux'
const MainContainer = () => {

  const movies=useSelector(store => store.movies?.nowPlayingMovies)
  
  if( !movies ) return ;

  const mainMovie     = movies[0] ;
  const { id, 
          overview, 
          title
        }             = mainMovie ;


  return (
    <div>
        <VideoTittle title={title} overview={overview} />
        <VideoBackGround movieId={id} />
    </div>
  )
}

export default MainContainer