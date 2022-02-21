import Head from "next/head";
import Header from "../Component/Header/Header";
import Category from "../Component/Category/Category";
import Main from "../Component/Main/Main";
import ExploreGenres from "../Component/ExploreGenres/ExploreGenres";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/montserrat";
import "@fontsource/poppins";
import Testslider from "./Testslider";
import Footer from '../Component/Footer/Footer';
import MobileHeader from "../Component/Header/MobileHeader";


export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME - OTT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <Category />

      <Main />

      <Footer />
    </div>
  );
}
