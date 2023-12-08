import {createSlice} from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        GPTPage:false,
        GPTSearch:false,
        GPTMovies:null,
        movieNames:null,
    },
    reducers:{
        toggleGPTPage :(state)=>{
            state.GPTPage = !state.GPTPage
        },
        showGPTSearch:(state) => {
            state.GPTSearch = !state.GPTSearch
        },
        addGPTMovies:(state,action) => {
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames
            state.GPTMovies = movieResults
        }
    }
})

export const {toggleGPTPage, showGPTSearch, addGPTMovies} = gptSlice.actions 
export default gptSlice.reducer