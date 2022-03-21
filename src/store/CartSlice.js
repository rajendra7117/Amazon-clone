import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      cartItems: localStorage.getItem("amazon-cart")
        ? JSON.parse(localStorage.getItem("amazon-cart"))
        : [],
      totalAmount: localStorage.getItem("amazonTotal")
        ? JSON.parse(localStorage.getItem("amazonTotal"))
        : 0,
    },
    reducers: {
      addToCart(state, action) {
      
        if (state.cartItems.length === 0) {
          state.cartItems = [...state.cartItems, action.payload];
  
          localStorage.setItem("amazon-cart", JSON.stringify(state.cartItems));
          let total;
          total = parseInt(action.payload.price.raw * action.payload.amount);
       
          state.totalAmount = total;
          localStorage.setItem("amazonTotal", JSON.stringify(state.totalAmount));
         
        }
         else {
          const existingCartItemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
  
          const items = current(state).cartItems;
          let existingCartItem = items[existingCartItemIndex];
          if (existingCartItem) {
            let updatedItem = {
              ...existingCartItem,
              amount: existingCartItem.amount + 1,
            };
         
            let updatedItems = [...items];
           
            updatedItems[existingCartItemIndex] = updatedItem;
            state.cartItems = updatedItems;
            let total = parseInt(state.totalAmount);
            total = total + parseInt(action.payload.price.raw) ;
            state.totalAmount = total;
         
          } else {
            state.cartItems = [...state.cartItems, action.payload];
  
            let total = parseInt(state.totalAmount);
            total = total + action.payload.price.raw ;
            state.totalAmount = total;
          }
  
          localStorage.setItem("amazon-cart", JSON.stringify(state.cartItems));
          localStorage.setItem("amazonTotal", JSON.stringify(state.totalAmount));
        }
      },
      removeFromCart(state, action) {
        const existingCartItemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
  
        const items = current(state).cartItems;
        let existingCartItem = items[existingCartItemIndex];
  
        if (existingCartItem.amount > 1) {
          let updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount - 1,
          };
          let updatedItems = [...items];
           
            updatedItems[existingCartItemIndex] = updatedItem;
            state.cartItems = updatedItems;
            let total = parseInt(state.totalAmount);
            total = total - action.payload.price ;
            state.totalAmount = total;
            
  
        }
        else{
          let items = (current(state).cartItems)
          let filtered = items.filter((item) => item.id!==action.payload.id)
           state.cartItems= filtered
          
          let total = parseInt(state.totalAmount);
            total = total - action.payload.price ;
            state.totalAmount = total
        }
        localStorage.setItem('amazon-cart', JSON.stringify(state.cartItems))
        localStorage.setItem('amazonTotal', JSON.stringify((state.totalAmount)))
      },
  
      clearCart(state, action){
        state.cartItems = []
        state.totalAmount = 0
      }
    },
  });
  
  export const cartAction = cartSlice.actions;
  
  export default cartSlice;