import { Box, Container } from '@mui/material'
import { AwsIcon, BingoIcon, BirdIcon, HooliIcon, LyftIcon, StripeIcon } from '../../public/assets'


const Sponsor = () => {
    return (<Box sx={{ marginBottom: '56px', backgroundColor: '#FAFAFA', marginTop: '98px', paddingY: '50px' }}>
        <Container maxWidth="lg" sx={{}} >
            <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', }}>
                <HooliIcon />
                <LyftIcon />
                <BirdIcon />
                <StripeIcon />
                <AwsIcon />
                <BingoIcon />
            </Box>
        </Container>
    </Box>

    )
}

export default Sponsor