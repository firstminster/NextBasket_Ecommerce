import { FC, useEffect, useState } from "react";
import Product from './Product'
import { Box, Button, Container } from '@mui/material'
import Title from '../common/Title'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getAllproducts, getProduct, productSelector } from "@/features/product";
import { useRouter } from "next/router";

const FeaturedProducts = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [displayedCount, setDisplayedCount] = useState(10); // Initial number of displayed items

    const {
        products,
        pending,
        error,
    } = useAppSelector(productSelector);


    const loadMoreProducts = () => {
        setDisplayedCount(prevCount => prevCount + 10); // Load 10 more items
    };

    const allItemsDisplayed = displayedCount >= products?.length;

    useEffect(() => {
        dispatch(getAllproducts())
    }, [])

    const handleProductClick = (productId: string) => {
        dispatch(getProduct(productId));
        router.push(`/${productId}`);
    };


    return (<Container maxWidth="lg" sx={{ marginTop: '80px', }} >
        <Title title=' Featured Products' subTitle='BESTSELLER PRODUCTS ' desc='Problems trying to resolve the conflict between' />
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', }} >

            <Box sx={{ display: "flex", flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: { xs: 'center', lg: 'space-between' }, marginBottom: '56px' }}>
                {
                    products?.slice(0, displayedCount).map((product: { id: number, brand: string, category: string, description: string, discountPercentage: number, images: [], thumbnail: string, title: string, stock: number, price: number, rating: number, },) => {

                        const { id, brand, category, description, discountPercentage, images, thumbnail, title, stock, price, rating, } = product

                        return (
                            <Product key={id} id={id} title={title} category={category} price={price} thumbnail={thumbnail} discountPercentage={discountPercentage} handleProductClick={handleProductClick} />
                        )
                    })
                }
            </Box>
            {!allItemsDisplayed && <Button onClick={loadMoreProducts} variant="outlined" sx={{ height: '58px', width: '261px', color: '#23A6F0', }} >LOAD MORE PRODUCTS</Button>}
        </Box>

    </Container>
    )
}

export default FeaturedProducts