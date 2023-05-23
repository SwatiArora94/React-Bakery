import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TCart } from './types'
import { TProduct } from 'types/product'

const initialState: TCart = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<TProduct | undefined>) => {
            if (action.payload){
                state.cartItems.push(action.payload)
            }
        },
        removeProductFromCart: (state, action: PayloadAction<number | undefined>) => {
            state.cartItems = state.cartItems.filter(product => product.id !== action.payload);
        },
    },
})

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;