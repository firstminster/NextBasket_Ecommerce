import Head from "next/head";
import Image from "next/image";
// import { Inter, Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import type { NextPage } from "next";
import { CallToAction, Footer, Header, Layout, NavBar, NavTop, Posts, FeaturedProducts, Review, Services } from "@/components";

import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getAllproducts, productSelector } from "@/features/product";



// const montserrat = Montserrat({ subsets: ["latin"] });

const Home: FC<NextPage> = () => {
  const dispatch = useAppDispatch();
  const {
    products,
    pending,
    error,
  } = useAppSelector(productSelector);

  // console.log(products);

  useEffect(() => {
    dispatch(getAllproducts())
  }, [])

  return (<Layout title="NextBasket" keywords="Home" description="Shop at your convenience" >
    <>
      <NavBar />
      <Header />
      <FeaturedProducts products={products} />
      <Services />
      <Posts />
      <Review />
      {/* <CallToAction /> */}
      <Footer />
    </>
  </Layout>
  );
}

export default Home;