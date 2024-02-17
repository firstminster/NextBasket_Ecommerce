import { Box } from '@mui/material'
import WishListItem from './WishListItem'
import { useAppSelector } from '@/hooks';
import { wishListSelector } from '@/features/wishlist';

const WishLists = () => {
    const {
        wishItems
    } = useAppSelector(wishListSelector);
    return (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: '', padding: '20px' }}>
        {wishItems?.map((item: any) => (
            <WishListItem key={item.id} product={item} />
        ))}

    </Box>
    )
}

export default WishLists