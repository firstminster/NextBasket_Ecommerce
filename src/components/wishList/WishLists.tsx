import { Box, Typography } from '@mui/material'
import WishListItem from './WishListItem'
import { useAppSelector } from '@/hooks';
import { wishListSelector } from '@/features/wishlist';

const WishLists = () => {
    const {
        wishItems
    } = useAppSelector(wishListSelector);


    // if (wishItems === null) {
    //     <Typography variant="h6" component="div" sx={{ fontSize: '16px', fontWeight: '500', color: '#252B42', marginBottom: '0px' }}>Select an item to add to the wish list</Typography>
    // }


    console.log(wishItems);
    return (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: '', padding: '20px' }}>
        {wishItems?.map((item: any) => (
            <WishListItem key={item.id} product={item} />
        ))}

    </Box>
    )
}

export default WishLists