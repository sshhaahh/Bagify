import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/cartSlices'
export const store = configureStore({
    reducer:{
        cart:cartReducer,
    }
})