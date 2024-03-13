import React from "react";
import { useRouter } from "next/router";
import { Breadcrumbs, BreadcrumbItem, Link } from "@nextui-org/react";
import productStyles from "../../styles/oneProduct.module.css";
import HomeIcon from "@mui/icons-material/Home";

const OneProduct = () => {
  const router = useRouter();
  console.log(router.query.product);
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
    </>
  );
  // return <p>Post: {router.query.product}</p>;
};

export default OneProduct;
