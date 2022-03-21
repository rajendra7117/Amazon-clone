import { createSlice } from "@reduxjs/toolkit";

const selectedCategorySlice = createSlice({
    name: 'category',
    initialState: {cat: localStorage.getItem('cat') ? JSON.parse(localStorage.getItem('cat')) : {}},
    reducers: {
        setCategory(state, action){
            state.cat = action.payload
            
            localStorage.setItem('cat', JSON.stringify(state.cat))
        }
    }
})

export const selectedCategorySliceActions = selectedCategorySlice.actions

export default selectedCategorySlice;