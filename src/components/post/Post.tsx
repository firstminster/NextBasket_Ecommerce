import { AlarmIcon, AlbumIcon, ArrowRightIcon, TagIcon } from '../../../public/assets'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

type Props = {
    imageUrl: string
}

const Post = ({ imageUrl }: Props) => {
    return (
        <Card sx={{ maxWidth: 348, borderRadius: '0', margin: { xs: '30px', lg: '0px' } }}>
            <Box sx={{ position: 'relative', }}>
                <TagIcon style={{ position: 'absolute', top: '20px', left: '20px' }} />
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={imageUrl}
                    sx={{ height: '300px' }}
                />
            </Box>
            <CardContent sx={{ height: '306px', display: "flex", flexDirection: 'column', alignItems: '', justifyContent: '', paddingX: '25px' }} >
                <Box sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: '', marginBottom: '10px', marginTop: '25px' }}>
                    <Typography variant="h5" component="div" sx={{ fontSize: '12px', fontWeight: 400, marginRight: '15px', color: '#8EC2F2' }} >
                        Google
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontSize: '12px', fontWeight: 400, marginRight: '15px', color: '#737373' }} >
                        Trending
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontSize: '12px', fontWeight: 400, color: '#737373' }} >
                        New
                    </Typography>

                </Box>
                <Typography variant="h5" component="div" sx={{ fontSize: '20px', fontWeight: 400, color: '#252B42', marginY: '10px' }} >
                    Loudest à la Madison #1
                    (L'integral)
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', fontWeight: 400, color: '#737373', marginY: '10px', width: '280px' }}>
                    We focus on ergonomics and meeting
                    you where you work. It's only a
                    keystroke away.
                </Typography>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', marginY: '25px', }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px', fontWeight: 400, color: '#BDBDBD', marginRight: '5px', display: "flex", alignItems: 'center' }}>
                        <AlarmIcon style={{ marginRight: '5px' }} />   22 April 2021
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px', fontWeight: 400, color: '#737373', display: "flex", alignItems: 'center' }}>
                        <AlbumIcon style={{ marginRight: '5px' }} /> 10 comments
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{ paddingX: '25px', paddingBottom: '35px' }} >
                <Button size="small" sx={{ fontSize: '14px', fontWeight: 700, color: '#737373' }}>Learn More</Button> <ArrowRightIcon />
            </CardActions>
        </Card>
    )
}

export default Post