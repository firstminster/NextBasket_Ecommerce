import { Box, Button, Container, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { headerData } from '../../data';
// import Grid from '@mui/material/Unstable_Grid2';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${248}&h=${248}&fit=crop&auto=format`,
        srcSet: `${image}?w=${248}&h=${248
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}


const Header = () => {


    return (
        <Container maxWidth="lg" sx={{ marginTop: '80px' }} >
            <ImageList
                sx={{ width: 1150, height: 250 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {headerData?.map((item) => (
                    <ImageListItem key={item?.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item?.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    )
}
{/* <Grid container spacing={4}>
    
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

</Grid> */}

export default Header