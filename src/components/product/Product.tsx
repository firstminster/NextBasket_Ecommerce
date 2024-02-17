import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

type ProductProps = {
    title: string;
    category: string;
    thumbnail?: string;
    price: number
    discountPercentage: number
}

const Product = ({ title, category, thumbnail, price, discountPercentage }: ProductProps) => {
    return (
        <Card sx={{ maxWidth: 183, boxShadow: 'none', borderRadius: '0', margin: '20px' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={thumbnail}
                sx={{ height: '238px' }}
            />
            <CardContent sx={{ height: '162px', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                <Typography variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: 700, color: '#252B42' }} >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', fontWeight: 700, color: '#737373', marginY: '10px' }}>
                    {category}
                </Typography>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px', fontWeight: 700, color: '#BDBDBD', marginRight: '5px' }}>
                        ${price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px', fontWeight: 700, color: '#23856D', }}>
                        ${discountPercentage}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Product