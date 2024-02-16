import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { Facebookv2Icon, Instagramv2Icon, Twitterv2Icon } from '../../public/assets'

const Footer = () => {
    return (<Box sx={{}}>
        <Box sx={{ marginBottom: '56px', backgroundColor: '#FAFAFA', marginTop: '98px', }}>
            <Container maxWidth="lg" sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '138px' }} >
                <Typography variant="h3" component="div" sx={{ fontSize: '24px', fontWeight: '700', }}>
                    Bandage
                </Typography>
                <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: 'center', }}>
                    <Facebookv2Icon style={{ marginRight: '20px' }} />
                    <Instagramv2Icon />
                    <Twitterv2Icon style={{ marginLeft: '20px' }} />
                </Box>

            </Container>
        </Box>
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginY: '50px' }}>
            <Container maxWidth="lg" sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }} >
                <Box sx={{}}>
                    <Typography variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: '700', color: '#252B42' }}>
                        Company Info
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginTop: '20px', marginBottom: '10px' }}>
                        About Us
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginY: '10px', }}>
                        Carrier
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginY: '10px', }}>
                        We are hiring
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373' }}>
                        Blog
                    </Typography>
                </Box>

                <Box sx={{}}>
                    <Typography variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: '700', color: '#252B42' }}>
                        Legal
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginTop: '20px', marginBottom: '10px' }}>
                        About Us
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginY: '10px', }}>
                        Carrier
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginY: '10px', }}>
                        We are hiring
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373' }}>
                        Blog
                    </Typography>
                </Box>
                <Box sx={{}}>
                    <Typography variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: '700', color: '#252B42' }}>
                        Features
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginTop: '20px', marginBottom: '10px' }}>
                        Business Marketing                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginY: '10px', }}>
                        User Analytic
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginY: '10px', }}>
                        Live Chat
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373' }}>
                        Unlimited Support
                    </Typography>
                </Box>
                <Box sx={{}}>
                    <Typography variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: '700', color: '#252B42' }}>
                        Resources
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginTop: '20px', marginBottom: '10px' }}>
                        IOS & Android
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginY: '10px', }}>
                        Watch a Demo
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373', marginY: '10px', }}>
                        Customers
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373' }}>
                        API
                    </Typography>
                </Box>
                <Box sx={{}}>
                    <Typography variant="h5" component="div" sx={{ fontSize: '16px', fontWeight: '700', color: '#252B42' }}>
                        Get In Touch
                    </Typography>

                    <Box
                        component="form"
                        sx={{ marginTop: '30px', marginBottom: '10px', height: '58px' }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="email" label="Your Email" variant="outlined" sx={{ backgroundColor: '#F9F9F9', color: '#737373', height: '58px', }} />
                        <Button variant="contained" sx={{ height: '58px', width: '117px', backgroundColor: '#23A6F0', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }} >Subscribe</Button>
                    </Box>
                    <Typography variant="h3" component="div" sx={{ fontSize: '12px', fontWeight: '400', color: '#737373' }}>
                        Lore imp sum dolor Amit
                    </Typography>
                </Box>

            </Container>
        </Box >
        <Box sx={{ backgroundColor: '#FAFAFA' }}>
            <Container maxWidth="lg" sx={{ display: "flex", flexDirection: 'column', alignItems: 'start', justifyContent: 'center', height: '74px' }} >
                <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373' }}>
                    Made With Love By Finland All Right Reserved
                </Typography>
            </Container>
        </Box>
    </Box >

    )
}

export default Footer