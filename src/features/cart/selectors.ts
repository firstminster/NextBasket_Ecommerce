import { RootState } from "../../store";
import { createSelector } from '@reduxjs/toolkit';

export const selectCart = (state: RootState) => state.cart

export const productSelector = createSelector(
    selectCart,
    state => state
)