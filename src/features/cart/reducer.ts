import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
    addItem,
    removeItem,
} from './actions';

interface CartState {
    items: any[];
}

const initialState: CartState = {
    items: [],
};

export const cartReducer = createReducer(initialState, builder => {
    builder.addCase(addItem, (state, action: PayloadAction<any>) => {
        state.items.push(action.payload)
        // return { ...state, items: [...state.items, action.payload] };
    }).addCase(removeItem, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
    })

})