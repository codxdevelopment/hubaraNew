import React from "react";
import { Breadcrumbs, BreadcrumbItem, Spacer } from "@nextui-org/react";
import HomeIcon from "@mui/icons-material/Home";
import indexStyles from "../../styles/cartStyles/cartIndesStyles.module.css";
import Link from "next/link";

const Index = () => {
  const carItems = [
    {
      itemName: "Signature Hubara Vest",
      itemImage:
        "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
      color: "Olive Green",
      size: "Large",
      price: "3900.00",
      quantity: 1,
    },
    {
      itemName: "Signature Hubara Vest",
      itemImage:
        "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
      color: "Olive Green",
      size: "Large",
      price: "3900.00",
      quantity: 1,
    },
    {
      itemName: "Signature Hubara Vest",
      itemImage:
        "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
      color: "Olive Green",
      size: "Large",
      price: "3900.00",
      quantity: 1,
    },
  ];

  const setCartItems = () => {
    const cartDivs = [];
    carItems.forEach((item, index) => {
      const carDiv = (
        <div key={index}>
          <div
            className={` rounded overflow-hidden shadow-lg mb-5 ${indexStyles.itemParentDiv}`}
          >
            <div className="flex justify-between">
              <div className="w-full bg-gray-200 p-4">Content 1</div>
              <div className="w-full bg-gray-200 p-4">Content 2</div>
              <div className="w-full bg-gray-200 p-4">Content 3</div>
            </div>
          </div>
        </div>
      );

      cartDivs.push(carDiv);
    });
    return cartDivs;
  };

  const itemsInCart = () => {
    return (
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 p-4">{setCartItems()}</div>
        <div className="col-span-12 md:col-span-4 p-4">
          Item 2 (6 columns on desktop)
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div>
        <div className={`${indexStyles.titleText}`}>
          <Breadcrumbs>
            <BreadcrumbItem className={indexStyles.enactiveLink}>
              <Link href="/">{<HomeIcon />}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem className={indexStyles.enactiveLink}>
              Home
            </BreadcrumbItem>
            <BreadcrumbItem className={indexStyles.enactiveLink}>
              Shop
            </BreadcrumbItem>
            <BreadcrumbItem className={indexStyles.enactiveLink}>
              Product
            </BreadcrumbItem>
            <BreadcrumbItem className={indexStyles.activeLink}>
              Cart
            </BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
      <div>{itemsInCart()}</div>
    </div>
  );
};

export default Index;
