import { Box } from '@mui/material'
import WishListItem from './WishListItem'

const WishLists = () => {
    return (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: '', padding: '20px' }}>
        {/* {cartItems?.map((item: any) => (
        <CartItem key={item.id} product={item} />
    ))} */}
        <WishListItem product={[]} />



    </Box>
    )
}

export default WishLists