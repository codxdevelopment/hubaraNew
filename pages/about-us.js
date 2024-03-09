import { Spacer } from "@nextui-org/react";
import React from "react";
import AboutBanner from "../components/AboutUsComponents/about_banner";
import Luxury from "../components/AboutUsComponents/luxury";
import Story from "../components/AboutUsComponents/story";

const AboutUs = () => {
  return (
    <>
      <Spacer y={3} />
      <AboutBanner />
      <Spacer y={20} />
      <Luxury />
      <Spacer y={20} />
      <Story />
    </>
  );
};

export default AboutUs;
