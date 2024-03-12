import React from "react";
import { Breadcrumbs, BreadcrumbItem, Spacer } from "@nextui-org/react";
import faqStyles from "../../styles/faqs.module.css";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Index = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <div className={`${faqStyles.parent} ${faqStyles.titleText}`}>
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href="/">{<HomeIcon />}</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>FAQs</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className={`flex items-center justify-center ${faqStyles.faqDiv}`}>
        <div className="text-center">
          <div className={faqStyles.contactHeading}>Contact Us !</div>
        </div>
      </div>
      <Spacer y={150} />
      <div class="grid grid-cols-12 gap-4">
        <div class="lg:col-span-3 col-span-12"></div>
        <div class="lg:col-span-3 col-span-12">Item 2</div>
        <div class="lg:col-span-3 col-span-12">Item 3</div>
        <div class="lg:col-span-3 col-span-12"></div>
      </div>
      <Spacer y={100} />
    </div>
  );
};

export default Index;
