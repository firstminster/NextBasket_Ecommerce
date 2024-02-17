import { decreaseQuantity, increaseQuantity, removeItem } from '@/features/cart';
import { useAppDispatch } from '@/hooks';
import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material'
import { createSvgIcon } from '@mui/material/utils';

type Props = {
    product: any
}

const CartItem = ({ product }: Props) => {
    const dispatch = useAppDispatch();

    const onIncreaseQuantity = (id: any) => {
        dispatch(increaseQuantity(id));
    };

    const onDecreaseQuantity = (id: any) => {
        dispatch(decreaseQuantity(id));
        console.log(id);
    };

    const onRemoveItem = (id: any) => {
        dispatch(removeItem(id));
    };


    return (<Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'start', padding: '10px', width: '350px' }}>

        <Box sx={{ display: 'flex', alignItems: 'start', }}>

            <Card sx={{ maxWidth: 50, boxShadow: 'none', borderRadius: '30', }}>
                <CardMedia
                    component="img"
                    alt={product.title}
                    height="50px"
                    image={product.thumbnail}
                />
            </Card>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '5px' }}>
                <Box sx={{ display: 'flex', alignItems: 'start', marginLeft: '5px' }}>
                    <Typography variant="h6" component="div" sx={{ fontSize: '16px', fontWeight: '500', color: '#252B42', marginBottom: '0px' }}>
                        {product.title}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ fontSize: '16px', fontWeight: '500', color: '#252B42', marginLeft: '5px' }}>
                        x {product.quantity}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: '', alignItems: 'start', marginLeft: '5px', }}>
                    <IconButton onClick={() => onIncreaseQuantity(product.id)} sx={{ marginLeft: '5px', }}>
                        <PlusIcon sx={{ fontSize: '13px', }} />
                    </IconButton>
                    <IconButton onClick={() => onDecreaseQuantity(product.id)} sx={{ marginX: '5px' }}>
                        <MinusIcon sx={{ fontSize: '13px', }} />
                    </IconButton>
                    <IconButton onClick={() => onRemoveItem(product.id)} sx={{ marginRight: '0 5px' }}>
                        <DeleteIcon sx={{ fontSize: '13px', }} />
                    </IconButton>

                </Box>
            </Box>

        </Box>

    </Box>
    )
}

export default CartItem


const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
);
const MinusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
    </svg>
    ,
    'Minus',
);
const DeleteIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>

    ,
    'Delete',
);