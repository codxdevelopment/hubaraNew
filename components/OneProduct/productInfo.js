import React, { useEffect, useState } from "react";
import infoStyles from "../../styles/oneProductStyles/productInfo.module.css";
import Image from "next/image";
import { Accordion, AccordionItem, Spacer } from "@nextui-org/react";
const ProductInfo = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const [sizeIndex, selectSizeIndex] = useState(0);
  const [selectedSizeName, setSelectedSizeName] = useState("Small");

  const [selectedSideImage, setSelectedSideImage] = useState(
    "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp"
  );

  const sideImagesLinks = [
    "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
    "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_652.webp",
    "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_46970.webp",
    "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_48538.webp",
  ];

  const productSizesArray = ["Small", "Mediam", "Large", "Extra Large"];

  const changeSelectedImage = (index) => {
    setSelectedSideImage(sideImagesLinks[index]); //
  };

  const changeSelectedSize = (index) => {
    selectSizeIndex(index);
  };

  useEffect(() => {
    setSelectedSizeName(productSizesArray[sizeIndex]);
  }, [sizeIndex]);

  const productSideImages = () => {
    return (
      <div className="flex flex-row gap-4">
        {sideImagesLinks.map((link, index) => (
          <div
            onClick={() => changeSelectedImage(index)}
            key={index}
            className={infoStyles.sideImage}
          >
            <Image
              src={link}
              height={80}
              width={60}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    );
  };

  const productSizes = () => {
    var sizes = [];
    productSizesArray.map((size, index) => {
      const oneSize = (
        <div
          onClick={() => changeSelectedSize(index)}
          key={index}
          className={
            sizeIndex === index
              ? infoStyles.prodcuctSizeSelected
              : infoStyles.prodcuctSizeUnSelected
          }
        >
          {size}
        </div>
      );
      sizes.push(oneSize);
    });

    return sizes;
  };
  return (
    <div className={infoStyles.productInfoParent}>
      <div className={infoStyles.productName}>Signature Hubara Vest</div>
      <div className={infoStyles.productPrice}>AED 3,900.00</div>
      <div className={infoStyles.productColorLabel}>Color: Khaki</div>
      <div className="mb-10">{productSideImages()}</div>
      <div className="mb-5 flex justify-between">
        <div className={`${infoStyles.productColorLabel} flex-grow`}>
          Size: {selectedSizeName}
        </div>
        <div className={` underline ${infoStyles.sizeGuide} self-end`}>
          View Size Guide
        </div>
      </div>
      <div className="mb-5 flex justify-between">{productSizes()}</div>
      <div className={infoStyles.addToShopping}>Add to Shopping bag</div>
      <div className={infoStyles.addToWishList}>Add to Wishlist</div>
      <div className="mb-5 flex justify-between">
        <div className={`${infoStyles.hubaraNotes} flex-grow cursor-pointer`}>
          {"The Hubara's Notes"}
        </div>
        <div className={`self-end`}>
          <Image src={"/downArrow.svg"} height={20} width={20} />
        </div>
      </div>
      <div className={`${infoStyles.notesText} mb-5`}>
        Hubara's signature vest is cut for a comfortable, relaxed fit from
        lightweight and durable nylon, with 100% cashmere for extra luxurious
        warmth and comfort. Zip closure and two side pockets, with gold
        embroidered logo - an ideal staple for travel and leisure time.
      </div>
      <hr className={infoStyles.accordianHr} />
      <div className={`${infoStyles.hubaraNotes} flex-grow cursor-pointer`}>
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Size and Fit">
            <div className={`${infoStyles.notesText} mb-5`}>
              Fits slightly large. Take a smaller size. This vest is designed to
              wear layers under it. Mid-weight - with warm cashmere lining. The
              model is shown wearing a M (UK/US 38-40, IT/FR/EU 48-50). Model
              measures: chest 38"/ 96cm, height 6'1"/ 185cm.
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      <hr className={infoStyles.accordianHr} />
      <div className={`${infoStyles.hubaraNotes} flex-grow cursor-pointer`}>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="DETAILS & CARE"
          >
            <div className={`${infoStyles.notesText} mb-5`}>
              Outer - 90% Nylon and 10% Spandex.
              <br /> Inner - 100% Cashmere.
              <br />
              Professional Dry Clean Only.
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      <hr className={infoStyles.accordianHr} />
      <div className={`${infoStyles.hubaraNotes} flex-grow cursor-pointer`}>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="DELIVERY & RETURN"
          >
            <div className={`${infoStyles.notesText} mb-5`}>
              Find out more about our Returns & Exchanges options. Try home. If
              they're not quite right, you've got 30 days to request an exchange
              or return and send them back to us.
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <hr className={infoStyles.accordianHr} />
      <Spacer y={10} />
    </div>
  );
};

export default ProductInfo;
