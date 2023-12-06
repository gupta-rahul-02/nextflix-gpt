import {createSlice} from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        GPTPage:false,
        GPTSearch:false
    },
    reducers:{
        toggleGPTPage :(state)=>{
            state.GPTPage = !state.GPTPage
        },
        showGPTSearch:(state) => {
            state.GPTSearch = !state.GPTSearch
        }
    }
})

export const {toggleGPTPage, showGPTSearch} = gptSlice.actions 
export default gptSlice.reducer