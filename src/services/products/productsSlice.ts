import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TProducts } from './types'
import { TProduct } from 'types/product'

const initialState: TProducts = {
    productItems: [],
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Array<TProduct>>) => {
            state.productItems = action.payload
        },
    },
})

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;