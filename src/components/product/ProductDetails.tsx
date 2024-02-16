import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'

const ProductDetails = () => {
    return (
        <Box sx={{ marginBottom: '56px', backgroundColor: '#FAFAFA', }}>
            <Container maxWidth="lg" sx={{}} >
                <Box sx={{ display: "flex", alignItems: 'start', justifyContent: 'center', marginY: '41px' }}>
                    <Box sx={{ display: "flex", alignItems: 'center', }}>
                        <Image src='/assets/images/desc-image.png '
                            alt="desc-image"
                            width={413}
                            height={372} />
                    </Box>


                    <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'start', justifyContent: '', marginLeft: '100px' }}>
                        <Typography variant="h4" component="div" sx={{ fontSize: '24px', fontWeight: 700, color: '#252B42' }} >
                            the quick fox jumps over
                        </Typography>
                        <Typography variant="h4" component="div" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', width: '513px', marginY: '30px' }} >
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', }}>

                            <Typography variant="h4" component="div" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', width: '480px' }} >
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </Typography>
                        </Box>
                        <Typography variant="h4" component="div" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', width: '513px', marginY: '30px' }} >
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </Typography>
                    </Box>
                </Box>

            </Container>
        </Box>

    )
}

export default ProductDetails