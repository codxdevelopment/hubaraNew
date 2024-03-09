import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import footerStyles from "../styles/footer.module.css";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import { Input } from "@nextui-org/react";
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
      <Spacer y={12} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white">
            <p className={footerStyles.footerTitle}>CUSTOMER CARE</p>
            {customerCareItems()}
          </div>
          <div className="bg-white">
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
          <div className="bg-white"></div>
          <div className="bg-white flex justify-start items-center h-full">
            <div className={footerStyles.footerItems}>
              <p className={footerStyles.footerItems}>
                {"Hubara Design Accetps"}
              </p>
              <Spacer y={5} />
              <div style={{ position: "relative" }}>
                <Image
                  src={"https://hubara.com/images/icons/Mastercard.svg"}
                  height={30}
                  width={30}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <Image
                  src={"https://hubara.com/images/icons/Visa.svg"}
                  height={35}
                  width={35}
                  style={{ position: "absolute", top: -2.0, left: "2.0rem" }} // Adjust left position as needed
                />
                <Image
                  src={"https://hubara.com/images/apple-pay.png"}
                  height={30}
                  width={30}
                  style={{ position: "absolute", top: 0.0, left: "4.5rem" }} // Adjust left position as needed
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spacer y={50} />
      {/* <hr className="h-0.5 bg-black" /> */}
      <Divider variant="middle" className="h-0.05 bg-black"/>

      <Spacer y={5} />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="bg-white col-span-3">
            <p className={footerStyles.allNews}>ALL NEWS IS GOOD NEWS</p>
            <Spacer y={1} />
            <p className={footerStyles.promotionsText}>
              Be the first to know about new arrivals, online promotions and
              more when you sign up to receive our emails.
            </p>
          </div>
          <div className="bg-white col-span-2"></div>
          <div className="bg-white col-span-2 "></div>
          <div className="bg-white col-span-5 pl-14">
            <div className="grid grid-cols-12">
              <div className="col-span-7 bg-white">
                <div className={`w-full h-75 border border-black rounded-sm p-1 ${footerStyles.subscribeInput}`}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={`w-full px-4 py-2 rounded-sm focus:outline-none ${footerStyles.allDetails}`}
                  />
                </div>
              </div>
              <div className="col-span-5 bg-white w-full flex justify-center items-center">
                <div className={`py-3 rounded-sm  ${footerStyles.subscribeBtn}`}>
                  Subscribe
                </div>
              </div>
              <div className="col-span-12">
                <span className={footerStyles.consentText}>By entering email address, you agree to our Privacy Policy and you may unsubscribe at any time.</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
