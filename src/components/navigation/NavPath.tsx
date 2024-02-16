import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ArrowRightv2Icon } from '../../../public/assets'



const NavPath = ({ activeHrefPath, activePath }: any) => {
    return (<Box sx={{ backgroundColor: '#FAFAFA', }}>
        <Container maxWidth="lg" sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: '', height: '92px' }} >
            <Box sx={{ display: "flex", flexWrap: 'wrap', alignItems: 'center', }}>
                <Link href="/" passHref style={{
                    textDecoration: "none",
                    color: "#252B42",
                    fontSize: '14px',
                    fontWeight: '700',
                    marginRight: '5px'
                }} > Home

                </Link>
                <ArrowRightv2Icon style={{ color: '#23A6F0', fontWeight: 'bold', fontSize: '14px', marginLeft: 15, marginRight: 15 }} />
                {/* <span style={{ color: '#23A6F0', fontWeight: 'bold', fontSize: '14px', }} >/</span> */}
                <Link href={`${activeHrefPath}`} passHref style={{
                    textDecoration: "none",
                    color: "#BDBDBD",
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginLeft: '5px'
                }}>{activePath}
                </Link>

            </Box>

        </Container>
    </Box>
    )
}

export default NavPath