import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { addWishItem, removeWishItem } from './actions';


interface WishState {
    wishItems: any[];
}

const initialState: WishState = {
    wishItems: [],
};

export const wishReducer = createReducer(initialState, builder => {
    builder.addCase(addWishItem, (state, action: PayloadAction<any>) => {
        const itemInWishList = state.wishItems.find(
            (item) => item.id === action.payload.id
        );
        if (!itemInWishList) {
            state.wishItems.push({ ...action.payload });
        }
    }).addCase(removeWishItem, (state, action: PayloadAction<any>) => {
        state.wishItems = state.wishItems.filter(item => item.id !== action.payload);
    })
})