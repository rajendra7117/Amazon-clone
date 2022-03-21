import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {wList: localStorage.getItem('wList') ? JSON.parse(localStorage.getItem('wList')) : []},
    reducers: {
        addToWishList(state, action){
            state.wList = [...state.wList, action.payload]
            localStorage.setItem('wList', JSON.stringify(state.wList))
        },
        removeFromWishList(state, action){
            let id = action.payload.id 
            state.wList = state.wList.filter(item => item.id!==id)
            localStorage.setItem('wList', JSON.stringify(state.wList))
        },
        clearList(state,action){
            state.wList = []
        }
    }
})

export const wishlistSliceActions = wishlistSlice.actions

export default wishlistSlice