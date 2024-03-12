import React from "react";
import shippingStyles from "../../styles/shipping.module.css";

const index = () => {
  return (
    <div>
      <div className={shippingStyles.imageContainer}>
        Hubara
        <br />
        Return Of Goods
      </div>

      <div className={shippingStyles.textContainer}>
        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.answer}>
              We hope you love your purchase. If your item is different from
              what you wish for, you can request a return within 30 days. Access
              “My Orders” on Hubaradesign.com and follow the steps in the
              “Return Order” section. Or contact, info@hubaradesign.com. The
              Process to Return your Hubara Design item: Step 1. Access “My
              Orders” on Hubaradesign.com and follow the steps in the “Return
              Order” section. Step 2. Please fill out all required information
              on the “Goods to Return” form found enclosed with your order. Step
              3. Pack your items to return and the “Goods to Return” form in the
              parcel. Step 4. Keep a proof of the return shipment. Return
              confirmation notification. Step 5. Upon collection and receipt of
              your returned item, the item will be submitted to Quality Control.
              The return amount may take 14 days to reach your account.
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.textQuestion}>
              When Returning Goods
            </div>
            <div className={shippingStyles.answer}>
              We will collect your returned goods within two working days Once
              we receive your item(s), it will go through our Quality Control
              process, which takes up to 24 hours. Once the Quality Control has
              been approved, we will return the amount to your chosen refund
              method. Refunds to credit/debit cards may take up to 10 days to
              reflect in your account. Please return all goods in their original
              packaging, and their tags still attached. We will send unapproved
              items back to you.
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.textQuestion}>Repeated Returns</div>
            <div className={shippingStyles.answer}>
              We offer a flexible returns policy to make your online shopping
              experience even easier. We do monitor the number of returns made
              by customers, and continued returns in breach of our terms and
              conditions will be flagged and may, at our discretion, lead to the
              closure of your HUBARA DESIGN account or future orders being
              refused.
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.textQuestion}>Our Policy</div>
            <div className={shippingStyles.answer}>
              All products must be returned in a new and unused state, in
              perfect condition, with all protective materials in place and the
              MR PORTER and designer tags attached to them (if applicable). We
              reserve the right not to accept any return if the product shows
              signs of wear or has been used or altered from its original
              condition in any way. Alternatively, we may reduce the amount of
              any applicable refund or exchange accordingly. For example, we may
              make a reduction in the following circumstances: -The product(s)
              have been used, worn, damaged, or washed; -The HUBARA DESIGN tag
              is not attached to the product(s) or has not been returned. Please
              note that the HUBARA DESIGN tags constitute an integral part of
              each product. You will be informed if we propose to reduce your
              refund for this reason. In this instance, you may (as an
              alternative to us providing you with a reduced refund) choose to
              have the products sent back to you at your own expense.
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.textQuestion}>Late returns</div>
            <div className={shippingStyles.answer}>
              Your item(s) should be returned to us within 28 days of receiving
              your order. Returns outside this timeframe may be accepted at the
              discretion of HUBARA DESIGN and may only be refunded as a store
              credit.
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.textQuestion}>Colors</div>
            <div className={shippingStyles.answer}>
              We have made every effort to display the colors of our products
              that appear on HUBARA DESIGN as accurately as possible. However,
              as computer monitors, tablets, and mobile devices vary, we cannot
              guarantee that your monitor's display of a color will be
              completely accurate.
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
