import { Spacer } from "@nextui-org/react";
import React from "react";
import AboutBanner from "../components/AboutUsComponents/about_banner";
import Luxury from "../components/AboutUsComponents/luxury";

const AboutUs = () => {
  return (
    <>
      <Spacer y={3} />
      <AboutBanner />
      <Spacer y={20} />
      <Luxury />
    </>
  );
};

export default AboutUs;
