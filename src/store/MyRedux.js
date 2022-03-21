import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import selectedCategorySlice from "./SelectedCategorySlice";
import infoSlice from "./InfoSlice";
import cartSlice from "./CartSlice";
import wishlistSlice from "./WishListSlice";
import paymentSlice from "./PaymentSlice";
import searchSlice from "./SearchResultsSlice";

const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        selectedCat: selectedCategorySlice.reducer,
        info: infoSlice.reducer,
        cart: cartSlice.reducer,
        wishList:  wishlistSlice.reducer,
        payment: paymentSlice.reducer,
        searchResults: searchSlice.reducer
    }
})

export default store;