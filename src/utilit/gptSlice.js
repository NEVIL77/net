import {createSlice} from "@reduxjs/toolkit"

const gptSlice = createSlice({

    name : "gpt",
    initialState : {
        showGptSearch : true ,
        movieResults  : null ,
        movieName     : null ,
    },
    reducers : {
        toggleGptSearchView : (state) =>{
            state.showGptSearch = !state.showGptSearch ;
        },
        addGptMovieResults : (state,action) =>{
            const { movieResult, movieName } = action.payload ; 

            state.movieResults = movieResult ;
            state.movieName    = movieName ;

        }
    }

})

export const { toggleGptSearchView ,addGptMovieResults } = gptSlice.actions ;
 
export default gptSlice.reducer ; 

