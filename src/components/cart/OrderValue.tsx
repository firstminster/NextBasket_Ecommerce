import { cartSelector } from '@/features/cart';
import { useAppSelector } from '@/hooks';
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const getTotal = (cartItem: any[]) => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItem.forEach((item) => {
        totalQuantity += item.quantity!;
        totalPrice += item.price! * item.quantity!;
    });
    return { totalPrice, totalQuantity };
};

const OrderValue = () => {
    const {
        cartItems
    } = useAppSelector(cartSelector);


    const quantity = getTotal(cartItems).totalQuantity;
    const price = getTotal(cartItems).totalPrice;

    return (<>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: '', padding: '20px' }}>
            <Typography variant="h6" component="div" sx={{ fontSize: '16px', fontWeight: '600', color: '#252B42', marginBottom: '10px' }}>
                Order Value
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: '', marginBottom: '5px' }} >
                <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: '600', color: '#252B42', marginRight: '5px' }}>
                    Total Quantity:
                </Typography>
                <Typography variant="body1" component="div" sx={{ fontSize: '14px', fontWeight: '500', color: '#252B42' }}> {quantity}</Typography>
            </Box>


            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: '' }} >
                <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: '600', color: '#252B42', marginRight: '5px' }}>
                    Total Price:
                </Typography>
                <Typography variant="body1" component="div" sx={{ fontSize: '14px', fontWeight: '500', color: '#252B42' }}> {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(price)}</Typography>
            </Box>


        </Box>
        <Button variant="outlined" sx={{ height: '35px', width: '120px', marginY: '10px' }} >Checkout</Button>
    </>

    )
}

export default OrderValue