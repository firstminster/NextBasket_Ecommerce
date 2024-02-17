import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
    addItem,
    removeItem,
} from './actions';

interface CartState {
    cartItems: any[];
}

const initialState: CartState = {
    cartItems: [],
};

export const cartReducer = createReducer(initialState, builder => {
    builder.addCase(addItem, (state, action: PayloadAction<any>) => {
        // state.items.push(action.payload)
        // return { ...state, items: [...state.items, action.payload] };
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
    }).addCase(removeItem, (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    })

})