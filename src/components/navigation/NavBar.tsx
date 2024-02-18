"use client"
import Link from 'next/link'
import * as React from 'react';
import { ArrowDownIcon, CartIcon, HeartIcon, MagnifierIcon, PhoneIcon, UserIcon, MailIcon, InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon, MenuIcon } from '../../../public/assets'
import { AppBar, Box, Container, IconButton, List, ListItem, ListItemButton, ListItemText, Tab, Tabs, Toolbar, Typography, Popover, Button, useTheme, useMediaQuery, Menu, MenuItem, Paper, MenuList, styled, MenuProps, alpha } from '@mui/material';
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

    // calculate all the quantities in the cart
    const getQuantity = () => {
        let quantity = 0;
        cartItems.forEach((item: { quantity: number; }) => (quantity += item.quantity));
        return quantity;
    };

    const cartCount = getQuantity();
    const wishCount = wishItems.length;

    // popup
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [anchorElHeart, setAnchorElHeart] = React.useState<HTMLButtonElement | null>(null);
    const [anchorElNav, setAnchorElNav] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickHeart = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElHeart(event.currentTarget);
    };

    const handleCloseHeart = () => {
        setAnchorElHeart(null);
    };

    const open = Boolean(anchorEl);
    const openHeart = Boolean(anchorElHeart);
    const id = open ? 'simple-popover' : undefined;
    const idHeart = openHeart ? 'simple-popover' : undefined;

    // Mobile menu
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

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
                    {
                        isMatch ? <Box sx={{ flexGrow: 1, display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="h3" component="div" sx={{ fontSize: '24px', fontWeight: '700', marginRight: '119px' }}>
                                Bandage
                            </Typography>
                            <IconButton size="large" onClick={handleOpenNavMenu}>
                                <MenuIcon />
                            </IconButton>
                        </Box> :
                            <>
                                <Box sx={{ flexGrow: 1, display: { xs: 'hidden', lg: "flex" }, alignItems: 'center', }}>
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
                                        <Link href="#" style={{
                                            textDecoration: "none",
                                            color: "#23A6F0",
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            marginRight: '5px'
                                        }} > Login

                                        </Link>
                                        <span style={{ color: '#23A6F0', fontWeight: 'bold', fontSize: '14px', }} >/</span>
                                        <Link href="#" style={{
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


                                    <IconButton onClick={handleClickHeart} sx={{ color: '#23A6F0', fontWeight: '400', fontSize: '12px', }}>
                                        <HeartIcon style={{ margin: '5px' }} /> {wishCount}
                                    </IconButton>
                                    <Popover
                                        id={idHeart}
                                        open={openHeart}
                                        anchorEl={anchorElHeart}
                                        onClose={handleCloseHeart}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <WishLists />
                                    </Popover>
                                </Box>
                            </>
                    }
                </Container>
                <Menu elevation={0} anchorEl={anchorElNav} anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }} transformOrigin={{
                    vertical: "top", // Adjust to match the new position
                    horizontal: "right",
                }}
                    open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: "block", lg: "none" }, }}>


                    <Paper sx={{ width: '1000px', maxWidth: '100%', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                        <MenuItem onClick={handleCloseNavMenu} sx={{ margin: '7.5px' }}>Home</MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>Shop</MenuItem>
                        <MenuItem onClick={handleCloseNavMenu} sx={{ margin: '7.5px' }}>About</MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>Blog</MenuItem>
                        <MenuItem onClick={handleCloseNavMenu} sx={{ margin: '7.5px' }}>Contact</MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>Pages</MenuItem>
                        <MenuItem onClick={handleCloseNavMenu} sx={{ margin: '7.5px' }}>
                            <Box>
                                <UserIcon />
                                <Link href="#" style={{
                                    textDecoration: "none",
                                    color: "#23A6F0",
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    marginRight: '5px'
                                }} > Login

                                </Link>
                                <span style={{ color: '#23A6F0', fontWeight: 'bold', fontSize: '14px', }} >/</span>
                                <Link href="#" style={{
                                    textDecoration: "none",
                                    color: "#23A6F0",
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    marginLeft: '5px'
                                }}>Register
                                </Link>
                            </Box></MenuItem>

                        <MenuItem autoFocus={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: '', justifyContent: 'center' }}>
                            <IconButton sx={{ margin: '0 0px' }}>
                                <MagnifierIcon />
                            </IconButton>

                            <IconButton onClick={handleClick} sx={{ marginRight: '0px', color: '#23A6F0', fontWeight: '400', fontSize: '12px', }}>
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


                            <IconButton onClick={handleClickHeart} sx={{ color: '#23A6F0', fontWeight: '400', fontSize: '12px', }}>
                                <HeartIcon style={{ margin: '5px' }} /> {wishCount}
                            </IconButton>
                            <Popover
                                id={idHeart}
                                open={openHeart}
                                anchorEl={anchorElHeart}
                                onClose={handleCloseHeart}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <WishLists />
                            </Popover></MenuItem>

                    </Paper>

                </Menu>
            </Toolbar>
        </AppBar >

    )
}

export default NavBar

// const StyledMenu = styled((props: MenuProps) => (
//     <Menu
//         elevation={0}
//         anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'right',
//         }}
//         transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//         }}
//         {...props}
//     />
// ))(({ theme }) => ({
//     '& .MuiPaper-root': {
//         borderRadius: 6,
//         marginTop: theme.spacing(1),
//         minWidth: 180,
//         color:
//             theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//         boxShadow:
//             'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//         '& .MuiMenu-list': {
//             padding: '4px 0',
//         },
//         '& .MuiMenuItem-root': {
//             '& .MuiSvgIcon-root': {
//                 fontSize: 18,
//                 color: theme.palette.text.secondary,
//                 marginRight: theme.spacing(1.5),
//             },
//             '&:active': {
//                 backgroundColor: alpha(
//                     theme.palette.primary.main,
//                     theme.palette.action.selectedOpacity,
//                 ),
//             },
//         },
//     },
// }));