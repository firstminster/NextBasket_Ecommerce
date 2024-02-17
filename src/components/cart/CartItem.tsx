import { Box } from '@mui/material'
import React from 'react'

type Props = {
    product: any
}

const CartItem = ({ product }: Props) => {
    return (<Box sx={{ display: 'flex', alignItems: 'center' }}>
        <div>CartItem</div>

    </Box>
    )
}

export default CartItem