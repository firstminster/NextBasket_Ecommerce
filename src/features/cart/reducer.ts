import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
    addItem,
    decreaseQuantity,
    increaseQuantity,
    removeItem,
} from './actions';
import { CartProduct } from '@/types';

interface CartState {
    cartItems: CartProduct[];
}

const initialState: CartState = {
    cartItems: [],
};

export const cartReducer = createReducer(initialState, builder => {
    builder.addCase(addItem, (state, action: PayloadAction<any>) => {
        const itemInCart = state.cartItems.find(
            (item) => item.id === action.payload.id
        );
        if (itemInCart) {
            if (itemInCart.quantity !== undefined) {
                itemInCart.quantity++;
            }
        } else {
            state.cartItems.push({ ...action.payload, quantity: 1 });
        }
    }).addCase(increaseQuantity, (state, action) => {
        const item = state.cartItems.find((item) => item.id === action.payload);
        if (item && item.quantity !== undefined) {
            item.quantity++;
        }
    }).addCase(decreaseQuantity, (state, action) => {
        const item = state.cartItems.find((item) => item.id === action.payload);
        if (item && item.quantity !== undefined && item.quantity > 1) {
            item.quantity--;
        }

    }).addCase(removeItem, (state, action: PayloadAction<any>) => {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    })

})