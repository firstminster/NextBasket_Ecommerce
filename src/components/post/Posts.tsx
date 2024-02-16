import React from 'react'
import Post from './Post'
import { Box, Container, Typography } from '@mui/material'

const Posts = () => {
    return (<Container maxWidth="lg" sx={{ marginY: '240px' }} >
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '56px' }}>
            <Typography variant="h6" component="div" sx={{ fontSize: '14px', fontWeight: 700, color: '#23A6F0' }} >
                Practice Advice
            </Typography>
            <Typography variant="h2" component="div" sx={{ fontSize: '40px', fontWeight: 700, color: '#252B42', marginY: '10px' }} >
                Featured Posts
            </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: { xs: 'center', lg: 'space-between' }, marginBottom: '56px' }}>

            <Post imageUrl="/images/post-1.png" />
            <Post imageUrl="/images/post-2.png" />
            <Post imageUrl="/images/post-3.png" />
        </Box>
    </Container>

    )
}

export default Posts