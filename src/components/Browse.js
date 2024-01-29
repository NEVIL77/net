import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import Header                   from './Header' ;
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies() ;
  useTopRatedMovies() ;
  usePopularMovies() ;

  return (
    <div>
      < Header />
      < MainContainer />
      < SecondaryContainer />
    </div>
  )
}

export default Browse  