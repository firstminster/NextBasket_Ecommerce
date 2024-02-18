
import { FC, } from "react";
import type { NextPage } from "next";
import { CallToAction, Footer, Header, Layout, NavBar, Posts, FeaturedProducts, Review, Services } from "@/components";

import styles from "@/styles/Home.module.css";


// const montserrat = Montserrat({ subsets: ["latin"] });

const Home: FC<NextPage> = () => {


  return (<Layout title="NextBasket" keywords="Home" description="Shop at your convenience" >
    <>
      <NavBar />
      {/* <Header /> */}
      <FeaturedProducts />
      <Services />
      <Posts />
      <Review />
      <CallToAction />
      <Footer />
    </>
  </Layout>
  );
}

export default Home;