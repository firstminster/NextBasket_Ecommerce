import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

const NavTop = () => {
    return (
        <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: '#23856D', height: '58px', display: { xs: "none", md: "flex" } }} >
            {/* <Box position="static" sx={{ flexGrow: 1, backgroundColor: '#23856D', color: "#fff", height: '350px' }}> */}
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: "flex", }}>
                        <Typography variant="h6" sx={{ fontSize: '14px', marginRight: '20px' }} >
                            (225) 555-0118
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '14px' }} >
                            michelle.rivera@example.com
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '14px' }} >
                        Follow Us  and get a chance to win 80% off
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: "flex", }}>

                        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '14px' }} >
                            Follow Us  :
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
            {/* </Box> */}
        </AppBar>
    )
}

export default NavTop