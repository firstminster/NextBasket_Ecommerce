import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Product = () => {
    return (
        <Card sx={{ maxWidth: 183, boxShadow: 'none', borderRadius: '0' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/assets/images/product-1.png"
                sx={{ height: '238px' }}
            />
            <CardContent sx={{ height: '162px', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                <Typography variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: 700 }} >
                    Graphic Design
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', fontWeight: 700, color: '#737373', marginY: '10px' }}>
                    English Department
                </Typography>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px', fontWeight: 700, color: '#BDBDBD', marginRight: '5px' }}>
                        $16.48
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px', fontWeight: 700, color: '#23856D', }}>
                        $6.48
                    </Typography>

                </Box>
            </CardContent>
        </Card>
    )
}

export default Product