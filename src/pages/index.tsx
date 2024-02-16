import Head from "next/head";
import Image from "next/image";
// import { Inter, Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import type { NextPage } from "next";
import { Header, Layout, NavBar, NavTop, Posts, Products, Review, Services } from "@/components";



// const montserrat = Montserrat({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (<Layout title="NextBasket" keywords="" description="" >
    <>
      {/* <NavTop /> */}
      <NavBar />
      <Header />
      <Products />
      <Services />
      <Posts />
      <Review />
    </>


  </Layout>
  );
}

export default Home;