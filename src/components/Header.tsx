import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Header = () => {


    return (
        <Container maxWidth="lg" sx={{ marginTop: '80px' }} >
            <Grid container spacing={4}>
                {/* Replace with your content. Each 'Grid item' represents one of the blocks in your layout. */}
                <Grid item xs={12} sm={12} md={6}>
                    <Paper elevation={1} sx={{ padding: 2, height: '616px', }}>
                        <Typography variant="subtitle1">5 Items</Typography>
                        <Typography variant="h5" gutterBottom>
                            FURNITURE
                        </Typography>
                        <Button variant="text">Read More</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper elevation={3} sx={{ padding: 2, height: '300px', }}>
                        <Typography variant="subtitle1">5 Items</Typography>
                        <Typography variant="h5" gutterBottom>
                            FURNITURE
                        </Typography>
                        <Button variant="text">Read More</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper elevation={3} sx={{ padding: 2, height: '300px', }} >
                        <Typography variant="subtitle1">5 Items</Typography>
                        <Typography variant="h5" gutterBottom>
                            FURNITURE
                        </Typography>
                        <Button variant="text">Read More</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper elevation={3} sx={{ padding: 2, height: '300px', }} >
                        <Typography variant="subtitle1">5 Items</Typography>
                        <Typography variant="h5" gutterBottom>
                            FURNITURE
                        </Typography>
                        <Button variant="text">Read More</Button>
                    </Paper>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Header