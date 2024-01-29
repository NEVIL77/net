import { useEffect } from "react";
import { addPopularMovies } from "../utilit/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilit/constants"

const usePopularMovies = () => {
    
    const dispatch = useDispatch() ;

    useEffect(()=>{
        const getPopularMovies = async ()=>{
            const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS  )
            const json = await data.json();
            console.log(json.results);
            dispatch( addPopularMovies( json.results ) )
        }
        getPopularMovies();
    },[])
}
export default usePopularMovies ;