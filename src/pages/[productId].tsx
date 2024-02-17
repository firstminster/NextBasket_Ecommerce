import { Description, Footer, Layout, NavBar, NavPath, ProductDetails, Sponsor } from '@/components'
import { getProduct, productSelector } from '@/features/product';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const shop = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { productId } = router.query;
    const {
        products,
        product,
        pending,
        error,
    } = useAppSelector(productSelector);

    console.log(productId);
    console.log(product);

    useEffect(() => {
        if (productId && typeof productId === 'string') {
            dispatch(getProduct(productId))
        }
    }, [dispatch, productId])


    if (!product) {
        return <p>Product not found!</p>;
    }


    return (<Layout title="NextBasket" keywords="Home" description="Shop at your convenience" >
        <>
            <NavBar />
            <NavPath activeHrefPath='/' activePath='Shop' />
            <ProductDetails product={product} />
            <Description />
            <Sponsor />
            <Footer />
        </>
    </Layout>
    )
}

export default shop