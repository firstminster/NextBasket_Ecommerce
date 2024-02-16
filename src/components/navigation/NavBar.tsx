"use-client"
import { ArrowDownIcon, CartIcon, HeartIcon, MagnifierIcon, PhoneIcon, UserIcon, MailIcon, InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon } from '../../../public/assets'
import { AppBar, Box, Container, IconButton, List, ListItem, ListItemButton, ListItemText, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'


const NavBar = () => {
    return (
        <AppBar position="sticky" sx={{ boxShadow: 'none', }}>
            <Toolbar disableGutters sx={{ backgroundColor: '#23856D', display: { xs: "none", lg: "flex" } }}>
                <Container maxWidth="xl" sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', }}>
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
                </Container>
            </Toolbar>
            <Toolbar disableGutters sx={{ backgroundColor: '#fff', color: '#000' }}>
                <Container maxWidth="xl" sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', }}>
                    <Box sx={{ flexGrow: 1, display: "flex", alignItems: 'center', }}>
                        <Typography variant="h3" component="div" sx={{ fontSize: '24px', fontWeight: '700', marginRight: '119px' }}>
                            Bandage
                        </Typography>

                        <Box sx={{ display: "flex", justifyContent: 'space-around', alignItems: 'center', width: '361px', fontWeight: '500' }}>

                            <Link href='/' style={{
                                textDecoration: "none",
                                color: "#737373",
                                fontSize: '14px',
                            }}> Home </Link>

                            <Link href='/' style={{
                                textDecoration: "none",
                                color: "#737373",
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <p style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginRight: '8px'

                                }}>Shop   </p><ArrowDownIcon />
                            </Link>
                            <Link href='/' style={{
                                textDecoration: "none",
                                color: "#737373",
                                fontSize: '14px',
                            }}>
                                <p>
                                    About
                                </p>
                            </Link>
                            <Link href='/' style={{
                                textDecoration: "none",
                                color: "#737373",
                                fontSize: '14px',
                            }}>
                                Blog
                            </Link>
                            <Link href='/' style={{
                                textDecoration: "none",
                                color: "#737373",
                                fontSize: '14px',
                            }}> Contact</Link>
                            <Link href='/' style={{
                                textDecoration: "none",
                                color: "#737373",
                                fontSize: '14px',
                            }}> Pages </Link>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box>
                            <UserIcon />
                            <Link href="/" passHref style={{
                                textDecoration: "none",
                                color: "#23A6F0",
                                fontSize: '14px',
                                fontWeight: 'bold',
                                marginRight: '5px'
                            }} > Login

                            </Link>
                            <span style={{ color: '#23A6F0', fontWeight: 'bold', fontSize: '14px', }} >/</span>
                            <Link href="/" passHref style={{
                                textDecoration: "none",
                                color: "#23A6F0",
                                fontSize: '14px',
                                fontWeight: 'bold',
                                marginLeft: '5px'
                            }}>Register
                            </Link>
                        </Box>
                        <IconButton sx={{ margin: '0 30px' }}>
                            <MagnifierIcon />
                        </IconButton>

                        <IconButton sx={{ marginRight: '30px', color: '#23A6F0', fontWeight: '400', fontSize: '12px', }}>
                            <CartIcon style={{ margin: '5px' }} /> 1
                        </IconButton>

                        <IconButton sx={{ color: '#23A6F0', fontWeight: '400', fontSize: '12px', }}>
                            <HeartIcon style={{ margin: '5px' }} /> 1
                        </IconButton>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar >

    )
}

export default NavBar