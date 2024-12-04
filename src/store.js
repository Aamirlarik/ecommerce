import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "./Slices/addcart/addCartSlice"
import productReducer from "./Slices/product/productSlice"

export const store = configureStore({

    reducer: {

        counter: CounterReducer,
        
        Products: productReducer,

    },
})