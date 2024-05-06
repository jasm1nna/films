import {configureStore} from '@reduxjs/toolkit' 
import cart from './cart/cart'
import film from './cart/film/film'


export const store = configureStore({
    reducer: {
        cart: cart,
        film: film
    }
})