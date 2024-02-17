import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {
    title: string;
    subTitle: string;
    desc?: string;
}

const Title = ({ title, subTitle, desc }: Props) => {
    return (
        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '56px', textAlign: 'center' }}>
            <Typography variant="h4" component="div" sx={{ fontSize: '20px', fontWeight: 400, color: '#737373', }} >
                {title}
            </Typography>
            <Typography variant="h3" component="div" sx={{ fontSize: '24px', fontWeight: 700, color: '#252B42', marginY: '10px', }} >
                {subTitle}
            </Typography>
            {desc && <Typography variant="body1" component="div" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', }} >
                {desc}
            </Typography>}
        </Box>
    )
}

export default Title