import { RootState } from "../../store";
import { createSelector } from '@reduxjs/toolkit';

export const selectProduct = (state: RootState) => state.product

export const productSelector = createSelector(
    selectProduct,
    state => state
)