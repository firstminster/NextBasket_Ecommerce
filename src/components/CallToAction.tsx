import { Box, Button, Container, Typography } from '@mui/material'
import { url } from 'inspector'
import Image from 'next/image'

const CallToAction = () => {
    return (
        <Box >
            <Image src="/assets/images/cta-banner.png" alt="cta-banner" style={{ width: '100%', height: '640px', objectFit: 'cover' }} width={100}
                height={100} loading="lazy" />

            <Container maxWidth="lg" sx={{ marginTop: '0px', }} >
                <Box sx={{ position: 'relative', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: { xs: '0px', lg: '0px' }, }}>

                    <Typography variant="h3" component="div" sx={{ position: 'absolute', top: '-520px', fontSize: '14px', fontWeight: 700, color: '#23A6F0', marginY: '0px', width: '571px', textAlign: 'center' }} >
                        Problems trying to resolve

                    </Typography>
                    <Typography variant="h3" component="div" sx={{ position: 'absolute', top: { xs: '-460px', md: '-30rem' }, fontSize: '40px', fontWeight: 700, color: '#252B42', marginY: '0px', width: { md: '571px' }, textAlign: 'center' }} >
                        Problems trying to resolve
                        the conflict between
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ position: 'absolute', top: { xs: '-200px', md: '-320px' }, fontSize: '14px', fontWeight: 400, color: '#737373', marginY: '0px', width: { xs: '287px', md: '447px' }, textAlign: 'center' }} >
                        Problems trying to resolve the conflict between the two major realms of Classical physics:
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ position: 'absolute', top: { xs: '-270px', md: '-250px' }, fontSize: '24px', fontWeight: 700, color: '#23856D', marginY: '0px', width: '447px', textAlign: 'center' }} >
                        $16.48
                    </Typography>

                    <Button variant="contained" sx={{ position: 'absolute', top: { xs: '-110px', md: '-180px' }, height: '52px', width: '292px', backgroundColor: '#23A6F0', }} >Add your call to action</Button>
                </Box>
            </Container >
        </Box >


    )
}

export default CallToAction