"use client"
import Link from 'next/link'
import * as React from 'react';
import { ArrowDownIcon, CartIcon, HeartIcon, MagnifierIcon, PhoneIcon, UserIcon, MailIcon, InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon } from '../../../public/assets'
import { AppBar, Box, Container, IconButton, List, ListItem, ListItemButton, ListItemText, Tab, Tabs, Toolbar, Typography, Popover, Button } from '@mui/material';
import Carts from '../cart/Carts';
import { cartSelector } from '@/features/cart';
import { useAppSelector } from '@/hooks';
import WishLists from '../wishList/WishLists';
import { wishListSelector } from '@/features/wishlist';



const NavBar = () => {
    const {
        cartItems
    } = useAppSelector(cartSelector);
    const {
        wishItems
    } = useAppSelector(wishListSelector);

    const getQuantity = () => {
        let quantity = 0;
        cartItems.forEach((item: { quantity: number; }) => (quantity += item.quantity));
        return quantity;
    };

    const cartCount = getQuantity();

    const wishCount = wishItems.length


    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [anchorHeartEl, setAnchorHeartEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleHeartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorHeartEl(event.currentTarget);
    };

    const handleHeartClose = () => {
        setAnchorHeartEl(null);
    };

    const open = Boolean(anchorEl);
    const openHeart = Boolean(anchorHeartEl);
    const id = open ? 'simple-popover' : undefined;
    const idHeart = openHeart ? 'simple-popover' : undefined;


    return (
        <AppBar position="sticky" sx={{ boxShadow: 'none', }}>
            <Toolbar disableGutters sx={{ backgroundColor: '#23856D', display: { xs: "none", lg: "flex" } }}>
                <Container maxWidth="lg" sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', }}>
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
                <Container maxWidth="lg" sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', }}>
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

                            <Link href='/:id' style={{
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
                            <Link href="/" style={{
                                textDecoration: "none",
                                color: "#23A6F0",
                                fontSize: '14px',
                                fontWeight: 'bold',
                                marginRight: '5px'
                            }} > Login

                            </Link>
                            <span style={{ color: '#23A6F0', fontWeight: 'bold', fontSize: '14px', }} >/</span>
                            <Link href="/" style={{
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



                        <IconButton onClick={handleClick} sx={{ marginRight: '30px', color: '#23A6F0', fontWeight: '400', fontSize: '12px', }}>
                            <CartIcon style={{ margin: '5px' }} /> {cartCount}
                        </IconButton>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <Carts />
                        </Popover>


                        <IconButton onClick={handleHeartClick} sx={{ color: '#23A6F0', fontWeight: '400', fontSize: '12px', }}>
                            <HeartIcon style={{ margin: '5px' }} /> {wishCount}
                        </IconButton>
                        <Popover
                            id={idHeart}
                            open={openHeart}
                            anchorEl={anchorHeartEl}
                            onClose={handleHeartClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <WishLists />
                        </Popover>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar >

    )
}

export default NavBar