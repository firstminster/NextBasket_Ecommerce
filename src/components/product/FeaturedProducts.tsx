import React from 'react'
import Product from './Product'
import { Box, Container } from '@mui/material'
import Title from '../common/Title'

type Props = {
    products: any[]
}

const FeaturedProducts = ({ products }: Props) => {


    return (<Container maxWidth="lg" sx={{ marginTop: '80px' }} >
        <Title title=' Featured Products' subTitle='BESTSELLER PRODUCTS ' desc='Problems trying to resolve the conflict between' />
        <Box sx={{ display: "flex", flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: { xs: 'center', lg: 'space-between' }, marginBottom: '56px' }}>
            {
                products?.map((product, index) => {

                    const { id, brand, category, description, discountPercentage, images, thumbnail, title, stock, price, rating, } = product
                    return (

                        <Product key={id} title={title} category={category} price={price} thumbnail={thumbnail} discountPercentage={discountPercentage} />
                    )
                })
            }

        </Box>
    </Container>
    )
}

export default FeaturedProducts