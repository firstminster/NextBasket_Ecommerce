import React from 'react'
import Product from './Product'
import { Container } from '@mui/material'
import Title from '../common/Title'

const FeaturedProducts = () => {
    return (<Container maxWidth="lg" sx={{ marginTop: '80px' }} >
        <Title title=' Featured Products' subTitle='BESTSELLER PRODUCTS ' desc='Problems trying to resolve the conflict between' />
        <Product />
    </Container>
    )
}

export default FeaturedProducts