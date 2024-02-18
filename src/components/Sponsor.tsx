import { Box, Container } from '@mui/material'
import { AwsIcon, BingoIcon, BirdIcon, HooliIcon, LyftIcon, StripeIcon } from '../../public/assets'


const Sponsor = () => {
    return (<Box sx={{ marginBottom: '0px', backgroundColor: '#FAFAFA', marginTop: '98px', paddingY: '50px' }}>
        <Container maxWidth="lg" sx={{}} >
            <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', }}>
                <HooliIcon />
                <Box sx={{ marginY: { xs: '60px', md: '0px' } }}>

                    <LyftIcon />
                </Box>
                <BirdIcon />
                <Box sx={{ marginY: { xs: '60px', md: '0px' } }}>
                    <StripeIcon />

                </Box>
                <AwsIcon />
                <Box sx={{ marginTop: { xs: '60px', md: '0px' } }}>

                    <BingoIcon />
                </Box>
            </Box>
        </Container>
    </Box>

    )
}

export default Sponsor