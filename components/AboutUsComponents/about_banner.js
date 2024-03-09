import React from "react";
import bannerStyles from "../../styles/aboutStyles/aboutBanner.module.css";
import { Spacer } from "@nextui-org/react";
import Head from "next/head";

const AboutBanner = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className={bannerStyles.bannerbg}>
        <div className={bannerStyles.text}>
          {"ABOUT"}
          <br />
          {"HUBARA DESIGN"}
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
