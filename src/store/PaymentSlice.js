import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {address: localStorage.getItem('payment-address') ? JSON.parse(localStorage.getItem('payment-address')) : {},
                   method: localStorage.getItem('method') ? JSON.parse(localStorage.getItem('method')) : {}
},
reducers: {
    setAddress(state,action){
        state.address = action.payload
        localStorage.setItem('payment-address', JSON.stringify(state.address))

    },
    setMethod(state,action){
    
        state.method = action.payload
        localStorage.setItem('method', JSON.stringify(state.method))
    },
    clearPaymentDetails(state,action){
        state.method = {}
        state.address ={}
        localStorage.setItem('method', JSON.stringify(state.address))
        localStorage.setItem('payment-address', JSON.stringify(state.address))
    }

}
})

export const paymentSliceActions = paymentSlice.actions

export default paymentSlice