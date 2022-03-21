import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: 'auth',
    initialState: {userDetails: localStorage.getItem('aUser') ? JSON.parse(localStorage.getItem('aUser')) : {},
                   isLoggedIn: localStorage.getItem('aLoggedIn') ? JSON.parse(localStorage.getItem('aLoggedIn')) : {}},
reducers: {
    storeUserDetails(state, action){
        console.log(action.payload)
        state.userDetails = action.payload
        localStorage.setItem('aUser', JSON.stringify(state.userDetails))

    },
    setAuthStatus(state, action){
       
        state.isLoggedIn = true
        localStorage.setItem('aLoggedIn', JSON.stringify(state.isLoggedIn))
    },
    signOut(state,action){
        state.isLoggedIn = false 
        localStorage.setItem('aLoggedIn', JSON.stringify(state.isLoggedIn))
        state.userDetails = {}
        localStorage.setItem('aUser', JSON.stringify(state.userDetails))
    }
}
})

export const authSliceActions = authSlice.actions

export default authSlice;