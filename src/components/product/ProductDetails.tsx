import { Avatar, Box, Button, Container, Divider, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import { ArrowLeftv3Icon, ArrowRightv3Icon, BasketIcon, CircleBlackIcon, CircleBlueIcon, CircleGreenIcon, CircleOrangeIcon, LikeIcon, MoreIcon, StarEmptyIcon, StarFilledIcon } from '../../../public/assets'

const ProductDetails = () => {
    return (
        <Box sx={{ backgroundColor: '#FAFAFA', paddingBottom: '50px' }}>
            <Container maxWidth="lg" sx={{}} >
                <Box sx={{ display: "flex", alignItems: 'start', justifyContent: '', marginY: '0px' }}>
                    <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'start', }}>

                        <Image src='/assets/images/product-img-1.png '
                            alt="desc-image"
                            width={506}
                            height={450} />


                        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', marginTop: '21px' }}>
                            <Image src='/assets/images/product-img-2.png '
                                alt="desc-image"
                                width={100}
                                height={75} />

                            <Image src='/assets/images/product-img-3.png '
                                alt="desc-image"
                                width={100}
                                height={75} style={{ marginLeft: '19px' }} />

                        </Box>
                    </Box>
                    {/* <ArrowRightv3Icon style={{ position: 'relative', top: '300px', left: '450px', color: '#000' }} />
                    <ArrowLeftv3Icon style={{ position: 'relative', top: '270px', left: '30px', color: '#000' }} /> */}


                    <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'start', justifyContent: '', marginLeft: '100px' }}>
                        <Typography variant="h4" component="div" sx={{ fontSize: '20px', fontWeight: 400, color: '#252B42' }} >
                            Floating Phone
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginY: '20px' }}>
                            <StarFilledIcon style={{ marginRight: '5px' }} />
                            <StarFilledIcon style={{ marginRight: '5px' }} />
                            <StarFilledIcon style={{ marginRight: '5px' }} />
                            <StarFilledIcon style={{ marginRight: '5px' }} />
                            <StarEmptyIcon />
                            <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#737373', marginLeft: '10px' }} >
                                10 Reviews
                            </Typography>
                        </Box>
                        <Typography variant="h4" component="div" sx={{ fontSize: '24px', fontWeight: 700, color: '#252B42', marginY: '20px' }} >
                            $1,139.33
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', }}>
                            <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#737373', }} >
                                Availability :
                            </Typography>
                            <Typography variant="h4" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#23A6F0', marginLeft: '5px' }} >
                                In Stock
                            </Typography>


                        </Box>
                        <Divider variant="middle" textAlign='center' component="div" sx={{ zIndex: '50px', opacity: "0.6" }} />
                        {/* <Typography variant="h4" component="div" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', marginY: '30px' }} >
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </Typography> */}
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
                            <IconButton sx={{ margin: '0 0 0 10px' }}>
                                <LikeIcon />
                            </IconButton>
                            <IconButton >
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