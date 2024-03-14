import React, { useState } from "react";
import { useRouter } from "next/router";
import { Breadcrumbs, BreadcrumbItem, Link } from "@nextui-org/react";
import productStyles from "../../styles/oneProduct.module.css";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import ProductInfo from "../../components/OneProduct/productInfo";

const OneProduct = () => {
  // const router = useRouter();
  // console.log(router.query.product);

  const [selectedSideImage, setSelectedSideImage] = useState(
    "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp"
  );

  const sideImagesLinks = [
    "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_88263.webp",
    "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_652.webp",
    "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_46970.webp",
    "https://s3.ap-south-1.amazonaws.com/media.hubara.com/upload/inventory/inventory_48538.webp",
  ];

  const changeSelectedImage = (index) => {
    setSelectedSideImage(sideImagesLinks[index]); //
  };

  const productSideImages = () => {
    return (
      <div className="flex flex-row md:flex-col gap-4">
        {sideImagesLinks.map((link, index) => (
          <div
            onClick={() => changeSelectedImage(index)}
            key={index}
            className={productStyles.sideImage}
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

  return (
    <>
      <div className={`${productStyles.parent} ${productStyles.titleText}`}>
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href="/">{<HomeIcon />}</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Shop</BreadcrumbItem>
          <BreadcrumbItem className={productStyles.productBreadcrumb}>
            Signature Hubara Vest
          </BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div class="container mx-auto">
        <div className={productStyles.productContainer}>
          <div class="hidden md:block">
            <div class="grid grid-cols-12 ">
              <div class="col-span-12 md:col-span-7">
                <div class="grid grid-cols-12 ">
                  <div
                    className={`flex items-center justify-center col-span-12 md:col-span-2 ${productStyles.sideImagesContainer}`}
                  >
                    {productSideImages()}
                  </div>
                  <div class="col-span-12 md:col-span-10">
                    <Image src={selectedSideImage} height={644} width={483} />
                  </div>
                </div>
              </div>
              <div class="col-span-12 md:col-span-5">
                <ProductInfo />
              </div>
            </div>
          </div>

          {/* div to show images in mobile View  */}

          <div class="block md:hidden">
            <div class="grid grid-cols-12 ">
              <div class="col-span-12 md:col-span-7">
                <div class="grid grid-cols-12 ">
                  <div class="col-span-12 md:col-span-10 md:col-start-2 p-4 md:p-0">
                    <Image src={selectedSideImage} height={644} width={483} />
                  </div>
                  <div
                    className={`flex items-center justify-center col-span-12 md:col-span-2 ${productStyles.sideImagesContainer}`}
                  >
                    {productSideImages()}
                  </div>
                </div>
              </div>
              <div class="col-span-12 md:col-span-5">
                <ProductInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // return <p>Post: {router.query.product}</p>;
};

export default OneProduct;
