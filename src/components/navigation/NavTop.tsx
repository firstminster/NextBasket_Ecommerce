import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, TwitterIcon, YoutubeIcon } from '@/assets'
import { AppBar, Avatar, Box, Container, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

const NavTop = () => {
    return (
        <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: '#23856D', height: '58px', display: { xs: "none", lg: "flex" } }} >
            {/* <Box position="static" sx={{ flexGrow: 1, backgroundColor: '#23856D', color: "#fff", height: '350px' }}> */}
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: "flex", alignItems: 'center', }}>
                        <IconButton>
                            <PhoneIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ fontSize: '14px', marginRight: '20px' }} >
                            (225) 555-0118
                        </Typography>
                        <IconButton>
                            <MailIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ fontSize: '14px' }} >
                            michelle.rivera@example.com
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '14px' }} >
                        Follow Us  and get a chance to win 80% off
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '14px' }} >
                            Follow Us  :
                        </Typography>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton>
                            <YoutubeIcon />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
            {/* </Box> */}
        </AppBar>
    )
}

export default NavTop