import { createReducer } from '@reduxjs/toolkit';
import { getAllproducts, getProduct } from './actions';
import Product from '@/types';

type ProductState = {
    products: Product[];
    product: any;
    pending: boolean;
    error: boolean;
}

const initialState: ProductState = {
    products: [],
    product: null,
    pending: false,
    error: false
}

export const productReducer = createReducer(initialState, builder => {
    builder.addCase(getAllproducts.pending, state => {
        state.pending = true;
        state.error = false;
    }).addCase(getAllproducts.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.products = payload;
    }).addCase(getAllproducts.rejected, state => {
        state.pending = false;
        state.error = true;
    });
    builder.addCase(getProduct.pending, state => {
        state.pending = true;
        state.error = false;
    }).addCase(getProduct.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.product = payload;
    }).addCase(getProduct.rejected, state => {
        state.pending = false;
        state.error = true;
    });
})

export default productReducer;