import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import styles from "../../styles/checkoutStyles.module.css";
import Link from "next/link";
import DeliveryForm from "./components/deliveryForm";
const Index = () => {
  return (
    <div className="container mx-auto px-4">
      <div>
        <div className={`text-center ${styles.breadContainer}`}>
          <Breadcrumbs>
            <BreadcrumbItem>
              <Link href="/cart">1. SHOPPING CART</Link>
            </BreadcrumbItem>
            <BreadcrumbItem className={styles.checkoutOutText}>
              2. CHECKOUT
            </BreadcrumbItem>
            <BreadcrumbItem>3. ORDER COMPLETE</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12 md:col-span-8 p-4">
          <DeliveryForm />
        </div>
        <div className="col-span-12 md:col-span-1 p-4"></div>
        <div className="col-span-12 md:col-span-3 p-4"></div>
      </div>
    </div>
  );
};

export default Index;
