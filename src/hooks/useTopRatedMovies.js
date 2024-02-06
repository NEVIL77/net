import { useEffect } from "react";
import { addTopRatedMovies } from "../utilit/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilit/constants"

const useTopRatedMovies = () => {
    
    const dispatch = useDispatch() ;
    const TopRatedMovies = useSelector (store => store.movies.TopRatedMovies)

    useEffect(()=>{
        const getTopRatedMovies = async ()=>{
            const data = await fetch( "https://api.themoviedb.org/3/movie/top_rated?",  API_OPTIONS  )
            const json = await data.json();
            // console.log(json.results);
            dispatch( addTopRatedMovies ( json.results ) )
        }
        !TopRatedMovies && getTopRatedMovies();
    },[])
}
export default useTopRatedMovies ;