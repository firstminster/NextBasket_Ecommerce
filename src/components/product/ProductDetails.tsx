import { Avatar, Box, Button, Card, CardMedia, Container, Divider, IconButton, Typography } from '@mui/material'
import { BasketIcon, CircleBlackIcon, CircleBlueIcon, CircleGreenIcon, CircleOrangeIcon, LikeIcon, MoreIcon, StarEmptyIcon, StarFilledIcon } from '../../../public/assets'
import { useAppDispatch } from '@/hooks';
import { addItem } from '@/features/cart';
import { addWishItem } from '@/features/wishlist';
import { useState } from 'react';

const ProductDetails = ({ product }: any) => {
    const dispatch = useAppDispatch();
    // const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
        dispatch(addItem(product)); // Add item to cart
        // setIsAddedToCart(true); // Update button state
    };
    const handleAddToWishList = () => {
        dispatch(addWishItem(product)); // Add item to wishList
        // setIsAddedToCart(true); // Update button state
    };
    return (
        <Box sx={{ backgroundColor: '#FAFAFA', paddingBottom: '50px' }}>
            <Container maxWidth="lg" sx={{}} >
                <Box sx={{ display: "flex", alignItems: 'start', justifyContent: '', marginY: '0px' }}>
                    <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'start', }}>
                        <Card sx={{ maxWidth: 506, boxShadow: 'none', borderRadius: '0', }}>


                            <CardMedia
                                component="img"
                                alt={product.title}
                                height="450px"
                                image={product.thumbnail}
                            />
                        </Card>


                        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', marginTop: '21px' }}>
                            {
                                product?.images.map((item: any, idx: number) => {
                                    return (
                                        <Card key={idx} sx={{ maxWidth: 100, boxShadow: 'none', borderRadius: '0', }}>
                                            <CardMedia
                                                component="img"
                                                alt={item}
                                                height="75"
                                                image={item}
                                            />

                                        </Card>
                                    )
                                })
                            }


                        </Box>
                    </Box>



                    <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'start', justifyContent: '', marginLeft: '100px' }}>
                        <Typography variant="h4" component="div" sx={{ fontSize: '20px', fontWeight: 400, color: '#252B42' }} >
                            {product.title}
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginY: '20px' }}>
                            <StarFilledIcon style={{ marginRight: '5px' }} />
                            <StarFilledIcon style={{ marginRight: '5px' }} />
                            <StarFilledIcon style={{ marginRight: '5px' }} />
                            <StarFilledIcon style={{ marginRight: '5px' }} />
                            <StarEmptyIcon />
                            <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#737373', marginLeft: '10px' }} >
                                {product.rating} Reviews
                            </Typography>
                        </Box>
                        <Typography variant="h4" component="div" sx={{ fontSize: '24px', fontWeight: 700, color: '#252B42', marginY: '20px' }} >
                            {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            }).format(product.price)}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', }}>
                            <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#737373', }} >
                                Availability :
                            </Typography>
                            <Typography variant="h4" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#23A6F0', marginLeft: '5px' }} >
                                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Typography>


                        </Box>
                        <Divider variant="middle" textAlign='center' component="div" sx={{ zIndex: '50px', opacity: "0.6" }} />

                        <Box sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '100px' }}>
                            <IconButton sx={{ marginRight: '0 5px' }}>
                                <CircleBlueIcon />
                            </IconButton>
                            <IconButton sx={{ marginRight: '0 5px' }}>
                                <CircleGreenIcon />
                            </IconButton>
                            <IconButton sx={{ marginRight: '0 5px' }}>
                                <CircleOrangeIcon />
                            </IconButton>
                            <IconButton >
                                <CircleBlackIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginY: '50px' }}>
                            <Button variant="contained" sx={{ height: '44px', width: '148px', fontSize: '12px', fontWeight: 700, backgroundColor: '#23A6F0', }} >Select Options</Button>
                            <IconButton onClick={handleAddToWishList} sx={{ margin: '0 0 0 10px' }}>
                                <LikeIcon />
                            </IconButton>
                            <IconButton onClick={handleAddToCart}>
                                <BasketIcon />
                            </IconButton>

                            <IconButton >
                                <MoreIcon />
                            </IconButton>




                        </Box>
                    </Box>
                </Box>

            </Container >
        </Box >

    )
}

export default ProductDetails