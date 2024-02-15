import Head from "next/head";
import Image from "next/image";
// import { Inter, Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import type { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";
import { Layout, NavBar, NavTop } from "@/components";
// import { Layout } from "@/components/layout";
// import NavBar from "@/components/NavBar";


// const montserrat = Montserrat({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (<Layout title="NextBasket" keywords="" description="" >
    <>
      <NavTop />
      <NavBar />
      {/* <Box sx={{ flexGrow: 1, backgroundColor: '#23856D', color: "#fff" }}>

      <Container maxWidth="xl">
        <Typography variant="h2" textAlign="">
          Hello, World
        </Typography>
      </Container>
    </Box> */}
    </>


  </Layout>
  );
}

export default Home;