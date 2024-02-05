import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import Header                   from './Header' ;
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies() ;
  useTopRatedMovies() ;
  usePopularMovies() ;

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  return (
    <div>
      <Header/>

      { !showGptSearch ? (<GptSearch/>) : (<> <MainContainer/> <SecondaryContainer/> </>) }
      
    </div>
  )
}

export default Browse  