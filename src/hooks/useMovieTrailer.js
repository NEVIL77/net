import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilit/constants";
import { addTrailerVideo } from "../utilit/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = ( movieId ) => {
// hokks
    const dispatch = useDispatch() ;

// functions
    const getMovieVideos = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
        const json = await data.json()

        const filteredData = json.results.filter( video => video.type === "Trailer" )
        const trailer      = filteredData.length ? filteredData[0] : json.results[0] ;

        if( !trailer ) return 

        dispatch( addTrailerVideo( trailer ) ) ;
    }
    
    useEffect( () => {
        getMovieVideos();
    },[])

}

export default useMovieTrailer