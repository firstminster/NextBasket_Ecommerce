import { Avatar, Box, Container, Grid, ImageList, ImageListItem, Paper, Typography } from '@mui/material'
import React from 'react'
import { ReviewImg1, StarEmptyIcon, StarFilledIcon } from '../../public/assets'
import Image from 'next/image'
import { reviewImgData } from '../../data'

const Review = () => {
    return (<Container maxWidth="lg" sx={{ marginY: '240px', }} >
        <Box sx={{ display: "flex", flexWrap: 'wrap', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center' }}>

            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: { xs: '0px', lg: '130px' } }}>

                <Typography variant="h4" component="div" sx={{ fontSize: '24px', fontWeight: 700, color: '#252B42' }} >
                    What they say about us
                </Typography>

                <Avatar alt="customer" src="/assets/images/review-user.png" sx={{ width: 90, height: 90, marginTop: '58px' }} />
                <Box sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginY: '20px' }}>
                    <StarFilledIcon style={{ marginRight: '5px' }} />
                    <StarFilledIcon style={{ marginRight: '5px' }} />
                    <StarFilledIcon style={{ marginRight: '5px' }} />
                    <StarFilledIcon style={{ marginRight: '5px' }} />
                    <StarEmptyIcon />
                </Box>


                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', fontWeight: 700, color: '#737373', display: "flex", alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginBottom: '20px', width: { xs: '288px', md: '451px' } }}>
                    Slate helps you see how many more days you need to work to
                    reach your financial goal.
                </Typography>
                <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#23A6F0' }} >
                    Practice Advice
                </Typography>
                <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#252B42' }} >
                    Designer
                </Typography>

            </Box>

            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '67px' }}>
                <ImageList sx={{ width: { xs: 300, md: 500 }, height: { xs: 250, md: 450 } }} cols={3} rowHeight={164}>
                    {reviewImgData.map((item, idx) => (
                        <ImageListItem key={idx}>
                            <img
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

            </Box>
        </Box>
    </Container >

    )
}

export default Review


{/* <Grid container spacing={2}>

                    <Grid item xs={4} sm={6} md={4}>
                        <Image src={ReviewImg1}
                            alt="bulb"
                            width={142.77}
                            height={142.77} />

                    </Grid>
                    <Grid item xs={4} sm={6} md={4}>
                        <Image src='/assets/images/review-1.png'
                            alt="bulb"
                            width={142.77}
                            height={142.77} />

                    </Grid>
                    <Grid item xs={4} sm={6} md={4}>
                        <Image src='/assets/images/review-1.png'
                            alt="bulb"
                            width={142.77}
                            height={142.77} />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Image src='/assets/images/review-1.png'
                            alt="bulb"
                            width={142.77}
                            height={142.77} />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Image src='/assets/images/review-1.png'
                            alt="bulb"
                            width={142.77}
                            height={142.77} />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Image src='/assets/images/review-1.png'
                            alt="bulb"
                            width={142.77}
                            height={142.77} />

                    </Grid>
                </Grid> */}