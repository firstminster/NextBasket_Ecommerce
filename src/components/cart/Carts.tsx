import { cartSelector } from '@/features/cart';
import { useAppSelector } from '@/hooks';
import { Box, Popover, Typography } from '@mui/material'
import React from 'react'
import CartItem from './CartItem';
import OrderValue from './OrderValue';

const Carts = () => {
    const {
        cartItems
    } = useAppSelector(cartSelector);

    console.log(cartItems);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: '', padding: '20px' }}>
            {cartItems?.map((item: any) => (
                <CartItem key={item.id} product={item} />
            ))}

            <OrderValue />
        </Box>


    )
}

export default Carts