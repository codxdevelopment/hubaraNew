import React, { useEffect, useState } from "react";
import { Breadcrumbs, BreadcrumbItem, Spacer } from "@nextui-org/react";
import HomeIcon from "@mui/icons-material/Home";
import indexStyles from "../../styles/cartStyles/cartIndesStyles.module.css";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  const [cartItems, setCarItemsArray] = useState([
    {
      itemName: "Signature Hubara Vest",
      itemImage:
        "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
      color: "Olive Green",
      size: "Large",
      price: "3,900.00",
      quantity: 1,
    },
    {
      itemName: "Signature Hubara Vest",
      itemImage:
        "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
      color: "Olive Green",
      size: "Large",
      price: "3,900.00",
      quantity: 1,
    },
    {
      itemName: "Signature Hubara Vest",
      itemImage:
        "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
      color: "Olive Green",
      size: "Large",
      price: "3,900.00",
      quantity: 1,
    },
  ]);

  useState(() => {}, [cartItems]);

  const deleteItem = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCarItemsArray(updatedCartItems);
  };

  const increaseItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCarItemsArray(updatedCartItems);
  };
  const decreaseBtn = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
    }
    setCarItemsArray(updatedCartItems);
  };

  const setCartItems = () => {
    const cartDivs = [];
    cartItems.forEach((item, index) => {
      const carDiv = (
        <div key={index}>
          <div
            className={`  overflow-hidden shadow-lg mb-5 ${indexStyles.itemParentDiv}`}
          >
            <div className="flex justify-between">
              <div className="p-5 w-3/5 mx-auto">
                <div className="relative">
                  <Image
                    src={item.itemImage}
                    alt={item.title}
                    width={90}
                    height={120}
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="w-full p-4">
                <div className={indexStyles.itemName}> {item.itemName}</div>
                <div className={indexStyles.colorAndSize}>
                  Color: {item.color}
                </div>
                <div className={`mb-2 ${indexStyles.colorAndSize}`}>
                  Size: {item.size}
                </div>
                <div className={`flex ${indexStyles.qunatityCounterParent}`}>
                  <div
                    onClick={() => decreaseBtn(index)}
                    className={indexStyles.decreaseBtn}
                  >
                    -
                  </div>
                  <div className={indexStyles.quantityDiv}>{item.quantity}</div>
                  <div
                    onClick={() => increaseItem(index)}
                    className={indexStyles.decreaseBtn}
                  >
                    +
                  </div>
                </div>
              </div>
              <div
                className={`p-4 w-3/5 ${indexStyles.priceDiv} flex items-center justify-center`}
              >
                AED : {item.price}
              </div>

              <div className={`p-4 w-1/2 relative`}>
                <div
                  className={`absolute top-0 right-0 h-full w-30 flex items-center justify-end mr-5 `}
                >
                  <Image
                    className={indexStyles.deleteBtn}
                    src={"/bin.svg"}
                    height={15}
                    width={15}
                    onClick={() => deleteItem(index)}
                  />
                </div>
              </div>
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
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12 md:col-span-8 p-4">
          <div>{setCartItems()}</div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className={indexStyles.summaryTex}>Summary</div>
          <div
            className={`${indexStyles.summaryParent} w-full overflow-hidden shadow-lg`}
          >
            <div className="flex">
              <div className={`flex-grow ${indexStyles.summaryItems}`}>
                SubTotal
              </div>
              <div className={`flex-shrink ${indexStyles.summaryItems}`}>
                AED 7,800.00
              </div>
            </div>
            <div className="flex">
              <div className={`flex-grow ${indexStyles.summaryItems}`}>
                Delivery Fee
              </div>
              <div className={`flex-shrink ${indexStyles.summaryItems}`}>
                AED 00.00
              </div>
            </div>

            <div className="flex">
              <div className={`flex-grow ${indexStyles.summaryItems}`}>
                Total
              </div>
              <div className={`flex-shrink ${indexStyles.summaryItems}`}>
                AED 7,800.00
              </div>
            </div>
          </div>
          <div className={indexStyles.proceedBtn}>Proceed to Shipment</div>
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
