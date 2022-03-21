import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {results: localStorage.getItem('searchResults') ? JSON.parse(localStorage.getItem('searchResults')) : []},
    reducers: {
        setResults(state, action){
            state.results = action.payload
            localStorage.setItem('searchResults', JSON.stringify(state.results))
        }
    }
})

export const searchSliceActions = searchSlice.actions

export default searchSlice;
