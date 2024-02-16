import { Layout, NavBar, NavPath } from '@/components'


const shop = () => {
    return (<Layout title="NextBasket" keywords="Home" description="Shop at your convenience" >
        <>
            <NavBar />
            <NavPath activeHrefPath='/shop' activePath='Shop' />
        </>
    </Layout>
    )
}

export default shop