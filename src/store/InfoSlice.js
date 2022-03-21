import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name: 'info',
    initialState: {product: localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : {}},
    reducers: {
        showInfo(state, action){
            state.product = action.payload
            localStorage.setItem('product', JSON.stringify(state.product))
        }
    }

})

export const infoSliceActions = infoSlice.actions

export default infoSlice;