import Head from "next/head";
import MobCategory from "../Component/Category/MobCategory";
import Main from "../Component/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/montserrat";
import "@fontsource/poppins";
import Footer from '../Component/Footer/Footer';
import MobileHeader from "../Component/Header/MobileHeader";


export default function Home() {
    return (
        <div>
            <Head>
                <title>HOME - OTT Mobile</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>


            <MobileHeader />
            <MobCategory />

            <Main />

            <Footer />
        </div>
    );
}
