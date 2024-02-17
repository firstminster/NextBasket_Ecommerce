import { createReducer } from '@reduxjs/toolkit';
import { getAllproducts } from './actions';

export type ProductState = {
    products: any[];
    pending: boolean;
    error: boolean;
}

const initialState: ProductState = {
    products: [],
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
    })
        .addCase(getAllproducts.rejected, state => {
            state.pending = false;
            state.error = true;
        });
})

export default productReducer;