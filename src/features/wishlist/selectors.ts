import { RootState } from "../../store";
import { createSelector } from '@reduxjs/toolkit';

export const selectWishList = (state: RootState) => state.wishList

export const wishListSelector = createSelector(
    selectWishList,
    state => state
)