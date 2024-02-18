'use client'

import { Box, Button, Container, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { headerData } from '../../data';
// import Grid from '@mui/material/Unstable_Grid2';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${248}&h=${248}&fit=crop&auto=format`,
        srcSet: `${image}?w=${248}&h=${248
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const headerTitle = <>
    <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#2DC071' }} >5 Items
    </Typography>
    <Typography variant="h3" component="div" sx={{ fontSize: '24px', fontWeight: 700, color: '#252B42' }} >FURNITURE
    </Typography>
    <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#252B42' }} >Read More
    </Typography>
</>




const Header = () => {

    return (<Container maxWidth="lg" sx={{ marginTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='grid-item' >
        <img src='/assets/images/header-Img1.png' className='image-one grid-item-one' />
        <Box sx={{ display: { xs: 'none', lg: 'block' }, position: 'absolute', top: { lg: '40px' }, left: '50px' }} >
            <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#2DC071' }} >5 Items
            </Typography>
            <Typography variant="h2" component="div" sx={{ fontSize: '40px', fontWeight: 700, color: '#252B42' }} >FURNITURE
            </Typography>
            <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#252B42' }} >Read More
            </Typography>
        </Box>
        <img src='/assets/images/header-Img2.png' className='image-two grid-item-two' />
        <Box sx={{ display: { xs: 'none', lg: 'block' }, position: 'absolute', top: '20px', right: '530px' }} >
            {headerTitle}
        </Box>
        <div className="grid-item-three">
            <img src='/assets/images/header-Img3.png' className='image-three ' />
            <Box sx={{ display: { xs: 'none', lg: 'block' }, position: 'absolute', top: '340px', right: '530px' }} >
                {headerTitle}
            </Box>
            <img src='/assets/images/header-Img4.png' className='image-four ' />
            <Box sx={{ display: { xs: 'none', lg: 'block' }, position: 'absolute', top: '340px', right: '190px' }} >
                {headerTitle}
            </Box>
        </div>
    </Container>


    )
}

// <Container maxWidth="lg" sx={{ marginTop: '80px' }} >
//     <Box > </Box>

// </Container>

{/* <ImageList
                sx={{ width: 1150, height: 250 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {headerData?.map((item) => (
                    <ImageListItem key={item?.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item?.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList> */}



{/* <Grid container spacing={4}>
    
    <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={1} sx={{ padding: 2, height: '616px', }}>
            <Typography variant="subtitle1">5 Items</Typography>
            <Typography variant="h5" gutterBottom>
                FURNITURE
            </Typography>
            <Button variant="text">Read More</Button>
        </Paper>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={3} sx={{ padding: 2, height: '300px', }}>
            <Typography variant="subtitle1">5 Items</Typography>
            <Typography variant="h5" gutterBottom>
                FURNITURE
            </Typography>
            <Button variant="text">Read More</Button>
        </Paper>
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
        <Paper elevation={3} sx={{ padding: 2, height: '300px', }} >
            <Typography variant="subtitle1">5 Items</Typography>
            <Typography variant="h5" gutterBottom>
                FURNITURE
            </Typography>
            <Button variant="text">Read More</Button>
        </Paper>
    </Grid>
    <Grid item xs={12} sm={12} md={4}>
        <Paper elevation={3} sx={{ padding: 2, height: '300px', }} >
            <Typography variant="subtitle1">5 Items</Typography>
            <Typography variant="h5" gutterBottom>
                FURNITURE
            </Typography>
            <Button variant="text">Read More</Button>
        </Paper>
    </Grid>

</Grid> */}

export default Header