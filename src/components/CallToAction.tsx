import { Box, Container } from '@mui/material'
import Image from 'next/image'

const CallToAction = () => {
    return (<Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: { xs: '0px', lg: '130px' } }}>

        <Image src='/assets/images/cta-banner.png'
            alt="cta-banner"
            width={100}
            height={640}
            // fill={true}
            style={{ objectFit: "contain", width: 'full' }} />
        <Container maxWidth="lg" sx={{ marginTop: '98px', }} >

            <div>CallToAction</div>
        </Container>
    </Box>

    )
}

export default CallToAction