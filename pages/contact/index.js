import React from "react";
import { Breadcrumbs, BreadcrumbItem, Spacer } from "@nextui-org/react";
import faqStyles from "../../styles/faqs.module.css";
import contactStyles from "../../styles/contact/contact.module.css";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Index = () => {

  return (
    <div>
      <div className={`${faqStyles.parent} ${faqStyles.titleText}`}>
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href="/">{<HomeIcon sx={{color: '#666'}} />}</Link>
          </BreadcrumbItem>
          <BreadcrumbItem sx={{color: '#666'}}>Contact Us</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className={`flex items-center justify-center ${faqStyles.faqDiv}`}>
        <div className="text-center">
          <div className={faqStyles.contactHeading}>Contact Us !</div>
        </div>
      </div>
      <Spacer y={150} />
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-3 col-span-12"></div>
        <div className={`lg:col-span-3 col-span-12 mx-10 lg:mx-0 ${contactStyles.infoBox}`}>
          <div className={` ${contactStyles.infoBoxInner}`}>
            <div className={` ${contactStyles.infoBoxContent}`}>
              <WhatsAppIcon  sx={{fontSize : '40px', color: '#fff'}}/>
                <Spacer y={2} />
              <h1>Whatsapp Us</h1>
              <div className={`px-2 ${contactStyles.hiddenContent}`}>
                <a href="tel:+97154 367 7797">+97154 367 7797</a>
                <p className="text-center">You can WhatsApp us and our representatives are eager to hear from you.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`lg:col-span-3 col-span-12 mx-10 lg:mx-0 ${contactStyles.infoBox}`}>
          <div className={` ${contactStyles.infoBoxInner}`}>
            <div className={` ${contactStyles.infoBoxContent}`}>
              <EmailOutlinedIcon sx={{fontSize : '40px', color: '#fff'}}/>
              <Spacer y={2} />
              <h1>Drop Us a Line</h1>
              <div className={`px-3 ${contactStyles.hiddenContent}`}>
                <a href="mailto:info@hubara.com">info@hubara.com</a>
                <p className="text-center">You can reach us via email for any enquires. We will respond as soon as possible</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 col-span-12"></div>
      </div>
      <Spacer y={100} />
    </div>
  );
};

export default Index;
