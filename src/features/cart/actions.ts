import { createAction } from "@reduxjs/toolkit"

export const addItem = createAction('cart/addItem')
export const removeItem = createAction('cart/removeItem')
export const increaseQuantity = createAction('cart/increaseQuantity')
export const decreaseQuantity = createAction('cart/decreaseQuantity')
