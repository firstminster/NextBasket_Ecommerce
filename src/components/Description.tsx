import { Box, Container, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import { GreenLineIcon } from '../../public/assets'

const Description = () => {
    return (<Box sx={{ marginBottom: '56px', marginTop: '98px', }}>
        <Container maxWidth="lg" sx={{}} >
            <Box sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '600', color: '#737373', marginY: '34px' }}>
                    Description
                </Typography>
                <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', marginX: '48px', color: '#737373' }}>
                    Additional Information
                </Typography>
                <Typography variant="h3" component="div" sx={{ fontSize: '14px', fontWeight: '700', color: '#737373' }}>
                    Reviews <span>(0)</span>
                </Typography>
            </Box>
            <Divider variant="middle" component="div" />

            <Box sx={{ display: "flex", alignItems: 'start', justifyContent: 'center', marginY: '41px' }}>
                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'start', justifyContent: '', marginRight: '100px' }}>
                    <Typography variant="h4" component="div" sx={{ fontSize: '24px', fontWeight: 700, color: '#252B42' }} >
                        the quick fox jumps over
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', width: '513px', marginY: '30px' }} >
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', }}>
                        <GreenLineIcon style={{ marginRight: '24px' }} />
                        <Typography variant="h4" component="div" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', width: '480px' }} >
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </Typography>
                    </Box>
                    <Typography variant="h4" component="div" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', width: '513px', marginY: '30px' }} >
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: 'center', }}>
                    <Image src='/assets/images/desc-image.png '
                        alt="desc-image"
                        width={413}
                        height={372} />
                </Box>
            </Box>
        </Container>
    </Box>


    )
}

export default Description