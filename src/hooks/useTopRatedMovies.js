import { useEffect } from "react";
import { addTopRatedMovies } from "../utilit/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilit/constants"

const useTopRatedMovies = () => {
    
    const dispatch = useDispatch() ;

    useEffect(()=>{
        const getTopRatedMovies = async ()=>{
            const data = await fetch( "https://api.themoviedb.org/3/movie/top_rated?",  API_OPTIONS  )
            const json = await data.json();
            console.log(json.results);
            dispatch( addTopRatedMovies ( json.results ) )
        }
        getTopRatedMovies();
    },[])
}
export default useTopRatedMovies ;