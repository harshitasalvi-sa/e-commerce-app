import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "../features/cart/cartSlice"
import productReducer from "../features/products/productSlice"
export const store = configureStore({
    reducer : {
        cart : cartReducer,
        //Initially I used redux for fetching products
        //products : productReducer,
    }
})

export default store;