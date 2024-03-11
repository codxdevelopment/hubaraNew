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

      <div class={`flex items-center justify-center ${faqStyles.faqDiv}`}>
        <div class="text-center">
          <div className={faqStyles.frequently}>Frequently</div>
          <div className={faqStyles.askedQuestion}>Asked Questions</div>
        </div>
      </div>
      <Spacer y={50} />
      <div>
        <div className={faqStyles.hubaraShop}>Hubara Shop</div>
        <hr />
        <div className={`${faqStyles.accordianTitle} ${faqStyles.parent}`}>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="What size should I buy?"
            >
              <div className={faqStyles.accordianText}>
                {
                  "The size and fit of a garment often varies amongst products. To help you choose the most suitable size, you can refer to the ‘Size and Fit' tab and the product measurements on every product page."
                }
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <hr />
        <div className={`${faqStyles.accordianTitle} ${faqStyles.parent}`}>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Do I need an account to place an order?"
            >
              <div className={faqStyles.accordianText}>
                {
                  "You don't need an account to complete a purchase. However, if you register with us, you can enjoy the following benefits through your Hubara Design account:"
                }
                <br />
                {"-Track your orders and view previous purchases"}
                <br />
                {"-Request your exchange or return directly from your account"}

                <br />
                {"-Add items and sold-out products to your Wish List"}
                <br />
                {
                  "-Save your address and card details so you can shop even more quickly in the future"
                }
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <hr />

        <div className={`${faqStyles.accordianTitle} ${faqStyles.parent}`}>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="How do I buy a product??"
            >
              <div className={faqStyles.accordianTextDark}>
                From the product page, choose the color and size you need. Then
                add the item to your shopping bag. Once you have everything you
                want in your shopping bag, proceed to the checkout. There are a
                few simple steps to purchasing:-<b>Log in</b> , if already
                registered, or create a new account. Otherwise, continue with
                your purchase as a guest.
                <br />- <b>Checkout</b> . Insert personal data and delivery
                address, accept the Terms of Sale, select gift and shipping
                options, and verify your order details.
                <br /> - <b>Payment</b> . Select the payment method and submit
                your order. Once payment has been authorized, we will send you
                an email confirming that we have received the order and are
                processing it. As soon as your order is on its way, we will
                email you again with details of your order, an electronic
                invoice if required, and a link to track your delivery.
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <hr />
        <div className={`${faqStyles.accordianTitle} ${faqStyles.parent}`}>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="What size should I buy?"
            >
              <div className={faqStyles.accordianText}>
                {
                  "The size and fit of a garment often varies amongst products. To help you choose the most suitable size, you can refer to the ‘Size and Fit' tab and the product measurements on every product page."
                }
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <hr />
        <div className={`${faqStyles.accordianTitle} ${faqStyles.parent}`}>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Can I amend or cancel an item from my order?"
            >
              <div className={faqStyles.accordianText}>
                Depending on the status of your order, it may be possible to
                cancel an item or request a different size for an item you have
                already purchased. Please note we're unable to add an item to an
                existing order. If you need to make any amendments to your
                order, please email our Hubara Customer Care Team as soon as
                possible and we'll see what we can do.
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <hr />

        <div className={`${faqStyles.accordianTitle} ${faqStyles.parent}`}>
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="What do I do if I think an item I purchased from your site is faulty?"
            >
              <div className={faqStyles.accordianText}>
                Simply email info@hubaradesign.com, and we'll look into this for
                you. When you contact us, please provide your order number and
                photographs of your item. Please be aware that items that have
                been damaged as a result of normal wear and tear, by accident,
                or your own misuse, will not be considered faulty. This does not
                affect your statutory rights.
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <hr />
      </div>
      <Spacer y={100} />
    </div>
  );
};

export default Index;
