import { Description, Footer, Layout, NavBar, NavPath, ProductDetails, Sponsor } from '@/components'


const shop = () => {
    return (<Layout title="NextBasket" keywords="Home" description="Shop at your convenience" >
        <>
            <NavBar />
            <NavPath activeHrefPath='/shop' activePath='Shop' />
            <ProductDetails />
            <Description />
            <Sponsor />
            <Footer />
        </>
    </Layout>
    )
}

export default shop