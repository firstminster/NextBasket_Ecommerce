import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Title from './common/Title'
import { BookReaderIcon, CarbonBookIcon, IndicatorIcon } from '../../public/assets'

const Services = () => {
    return (<Container maxWidth="lg" sx={{ marginTop: '80px' }} >
        <Title title=' Featured Products' subTitle='THE BEST SERVICES' desc='Problems trying to resolve the conflict between' />
        <Box sx={{ display: "flex", flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginY: '80px' }}>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                <BookReaderIcon />
                <Typography variant="h3" component="div" sx={{ fontSize: '24px', fontWeight: 700, color: '#252B42', marginY: '20px' }} >
                    Easy Wins
                </Typography>
                <Typography variant="body1" component="div" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', textAlign: 'center', width: '200px' }} >
                    Get your best looking smile now!
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                <CarbonBookIcon />
                <Typography variant="h3" component="div" sx={{ fontSize: '24px', fontWeight: 700, color: '#252B42', marginY: '20px' }} >
                    Concrete
                </Typography>
                <Typography variant="body1" component="div" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', textAlign: 'center', width: '220px' }} >
                    Defalcate is most focused in helping you discover your most beautiful smile
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                <IndicatorIcon />
                <Typography variant="h3" component="div" sx={{ fontSize: '24px', fontWeight: 700, color: '#252B42', marginY: '20px' }} >
                    Hack Growth
                </Typography>
                <Typography variant="body1" component="div" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', textAlign: 'center', width: '200px' }} >
                    Overcame any hurdle or any other problem.
                </Typography>
            </Box>
        </Box>
    </Container>

    )
}

export default Services