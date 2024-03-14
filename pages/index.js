import Head from "next/head";
import Button from "@mui/material/Button";
import Layout from "../components/layout";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Spacer } from "@nextui-org/react";
import utilStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Hubara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer y={5} className="hidden  lg`:block"/>
      {/* Large Screens Video */}
      <div className={`hidden md:block ${utilStyles.homeVideo}`} >
        <video
            autoPlay={true}
            loop={true}
            muted={true}
            poster="https://s3.ap-south-1.amazonaws.com/media.hubara.com/homebanner2.jpg"
          >
            <source
              src="https://s3.ap-south-1.amazonaws.com/media.hubara.com/Hubara+main+40mb.mp4"
              type="video/mp4"
            />
          </video>
      </div>
      {/* Small Screens Video */}
      <div className={`block md:hidden ${utilStyles.homeVideo}`} >
        <video
            autoPlay={true}
            loop={true}
            muted={true}
            poster="https://s3.ap-south-1.amazonaws.com/media.hubara.com/homebanner2.jpg"
          >
            <source
              src="https://s3.ap-south-1.amazonaws.com/media.hubara.com/mobile-video.mp4"
              type="video/mp4"
            />
          </video>
      </div>
      <div className={utilStyles.paragraphBox}>
        <h1 className={`py-5 px-6 md:px-2 ${utilStyles.paragraphText}`}>
              A casual aesthetic that flies under the radar, featuring the finest natural materials and combining clean, minimalist lines with future-proof fabric innovation. Hubara is defined as timeless clothing of the highest quality—sophisticated and understated, with craftsmanship, the provenance of fabrics, and sheer comfort at its heart.
        </h1>
      </div>
      <div className={utilStyles.contentBox}>
        <div className="grid grid-cols-12 gap-3 md:gap-6 pb-6">
          <div className={`col-span-6 md:col-span-6 ${utilStyles.innerCt}`}  style={{
                backgroundImage: "url('https://s3.ap-south-1.amazonaws.com/media.hubara.com/men-banner.png')",
                backgroundRepeat: "no-repeat"
                }} >
                  <Button variant="outlined" size="large" className={utilStyles.bannerBtn}>
                    Mens Collection
                  </Button>
          </div>
          <div  className={`col-span-6 md:col-span-6 ${utilStyles.innerCt}`}  style={{
                backgroundImage: "url('https://s3.ap-south-1.amazonaws.com/media.hubara.com/women-full-image.png')",
                backgroundRepeat: "no-repeat",
                }} >
                  <Button variant="outlined" size="large" className={utilStyles.bannerBtn}>
                    Womens Collection
                  </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
