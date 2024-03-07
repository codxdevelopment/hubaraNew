import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import footerStyles from "../styles/footer.module.css";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
export default function Footer({ Component, pageProps }) {
  const customerCareItems = () => {
    const items = [
      "FAQs",
      "Track An Order",
      "Shipping & Delivery",
      "Return of Goods",
      "Privacy & Policy",
      "Contact Us",
    ];
    var allItems = [];
    items.forEach((item, index) => {
      const oneItem = (
        <div
          key={index}
          className={footerStyles.footerItems}
          onClick={() => footerItemClickedSectionOne(index)}
        >
          <Spacer y={2.5} />
          <p className={footerStyles.footerItems}>{item}</p>
        </div>
      );
      allItems.push(oneItem);
    });

    return allItems;
  };

  const aboutUsSectionItems = () => {
    const items = [
      "Discover The Hubara Bird",
      "Our Pledge",
      "Our Categories",
      "Our New Collection",
    ];
    var allItems = [];
    items.forEach((item, index) => {
      const oneItem = (
        <div
          key={index}
          className={footerStyles.footerItems}
          onClick={() => footerItemClickedSectionTwo(index)}
        >
          <Spacer y={2.5} />
          <p className={footerStyles.footerItems}>{item}</p>
        </div>
      );
      allItems.push(oneItem);
    });

    return allItems;
  };

  const footerItemClickedSectionOne = (item) => {
    console.log(`Clicked on item: ${item}`);
    // Do something when an item is clicked
  };

  const footerItemClickedSectionTwo = (item) => {
    console.log(`Clicked on item: ${item}`);
    // Do something when an item is clicked
  };

  return (
    <>
      <hr className={footerStyles.divider}></hr>
      <Spacer y={10} />
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-white">
            <p className={footerStyles.footerTitle}>CUSTOMER CARE</p>
            {customerCareItems()}
          </div>
          <div class="bg-white">
            <p className={footerStyles.footerTitle}>ABOUT US</p>
            {aboutUsSectionItems()}
            <Spacer y={2.5} />
            <p className={footerStyles.footerTitle}>FOLLOW US</p>
            <Spacer y={5} />
            <div style={{ position: "relative" }}>
              <Image
                src={"https://hubara.com/images/icons/facebook.svg"}
                height={10}
                width={10}
                style={{ position: "absolute", top: 0, left: 0 }}
              />
              <Image
                src={"https://hubara.com/images/icons/Instagram.svg"}
                height={25}
                width={25}
                style={{ position: "absolute", top: -3.5, left: "1.2rem" }} // Adjust left position as needed
              />
              <Image
                src={"https://hubara.com/images/icons/instagram-threads1.svg"}
                height={25}
                width={25}
                style={{ position: "absolute", top: -3.5, left: "3.0rem" }} // Adjust left position as needed
              />

              <Image
                src={"https://hubara.com/images/icons/x.png"}
                height={15}
                width={15}
                style={{ position: "absolute", top: 0.0, left: "4.5rem" }} // Adjust left position as needed
              />
            </div>
          </div>
          <div class="bg-white"></div>
          <div class="bg-white flex justify-center items-center h-full">
            <div className={footerStyles.footerItems}>
              <Spacer y={2.5} />
              <p className={footerStyles.footerItems}>
                {"Hubara Design Accetps"}
              </p>

              <div style={{ position: "relative" }}>
                <Image
                  src={"https://hubara.com/images/icons/Mastercard.svg"}
                  height={25}
                  width={25}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <Image
                  src={"https://hubara.com/images/icons/Visa.svg"}
                  height={30}
                  width={30}
                  style={{ position: "absolute", top: -2.0, left: "2.0rem" }} // Adjust left position as needed
                />
                <Image
                  src={"https://hubara.com/images/apple-pay.png"}
                  height={25}
                  width={25}
                  style={{ position: "absolute", top: 0.0, left: "4.5rem" }} // Adjust left position as needed
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
