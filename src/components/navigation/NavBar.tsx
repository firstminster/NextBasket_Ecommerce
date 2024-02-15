"use-client"
import { AppBar, Box, Toolbar, Typography } from '@mui/material'


const NavBar = () => {
    return (
        <AppBar position="static" sx={{ boxShadow: 'none', color: '#000', height: '58px' }}>
            <Toolbar sx={{ backgroundColor: '#fff' }}>
                <Typography variant="h6" component="div">
                    aGuideHub
                </Typography>
            </Toolbar>
        </AppBar>

    )
}

export default NavBar