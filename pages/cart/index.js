import React from "react";
import { Breadcrumbs, BreadcrumbItem, Spacer } from "@nextui-org/react";
import HomeIcon from "@mui/icons-material/Home";

const Index = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div className={`${indexStyles.titleText}`}>
          <Breadcrumbs>
            <BreadcrumbItem>
              <Link href="/">{<HomeIcon />}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Shop</BreadcrumbItem>
            <BreadcrumbItem>Product</BreadcrumbItem>
            <BreadcrumbItem>Cart</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default Index;
