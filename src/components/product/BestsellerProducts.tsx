import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getAllproducts, getProduct, productSelector } from "@/features/product";
import { Box, Container, Typography, Divider } from '@mui/material';
import Product from './Product';
import { useRouter } from "next/router";

const BestsellerProducts = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [displayedCount, setDisplayedCount] = useState(10); // Initial number of displayed items

    const {
        products,
        pending,
        error,
    } = useAppSelector(productSelector);


    useEffect(() => {
        dispatch(getAllproducts())
    }, [])


    const handleProductClick = (productId: string) => {
        dispatch(getProduct(productId));
        router.push(`/${productId}`);
    };
    return (<Box sx={{ backgroundColor: '#FAFAFA', }}>

        <Container maxWidth="lg" sx={{ marginTop: '80px', padding: '20px' }} >
            <Typography variant="h3" component="div" sx={{ fontSize: '24px', fontWeight: 700, color: '#252B42', marginY: '10px', }} >
                BESTSELLER PRODUCTS
            </Typography>
            <Divider variant="middle" component="div" sx={{ marginY: '10px' }} />
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
        </Container>
    </Box>


    )
}

export default BestsellerProducts