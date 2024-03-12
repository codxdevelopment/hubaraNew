import React from "react";
import shippingStyles from "../../styles/shipping.module.css";

const index = () => {
  return (
    <div>
      <div className={shippingStyles.imageContainer}>
        Hubara
        <br />
        Shipping & Delivery
      </div>

      <div className={shippingStyles.textContainer}>
        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.textQuestion}>
              How to track your order
            </div>
            <div className={shippingStyles.answer}>
              Our delivery time starts when an order is accepted and includes a
              24-hour period where your items will be processed and dispatched.
              Please note this may take longer during Sale periods.Once your
              order has left us, you will receive an email with a tracking
              number to track its online progress. If you are a registered
              customer, you can follow your delivery by signing into your
              account and selecting 'My Orders.'
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.textQuestion}>
              Your delivery options
            </div>
            <div className={shippingStyles.answer}>
              Our delivery options and costs may vary for international
              shipments. For all deliveries in the United Arab Emirates, the
              delivery of your items is free of change. We offer next-day
              delivery on all orders across Dubai. Orders placed by 12:00
              pm/noon will be received the next day. And 2 to 3 days across the
              UAE Emirates. <br />* Orders placed outside of working hours (9
              am-8 pm), after the cut-off time, and/or during any UAE public
              holiday will be deemed placed on the first UAE working day
              following the Order's submission. Delivery times are between 9
              am-5 pm, Monday to Saturday, except on public holidays. For orders
              in the GCC, you will receive your purchases within 4 working days
              after your order has been accepted. Delivery costs will be
              mentioned at the point of checkout. For International deliveries
              beyond the GCC may vary based upon country.
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.textQuestion}>
              Customs requirements for your delivery
            </div>
            <div className={shippingStyles.answer}>
              For customs purposes on international deliveries, you might be
              contacted by your local courier company (DHL) via phone or SMS
              before delivering your HUBARA DESIGN order.If local customs
              require you to verify your identity by providing your ID number
              and validity date found on your government-issued identity card.
              If you do not have a government-issued identity card, you may also
              provide your passport number and expiry date as a suitable
              verification method.
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.textQuestion}>Delivery charges</div>
            <div className={shippingStyles.answer}>
              There will be no additional shipping charges (UAE Only).For other
              countries: Shipping Fees may incur. Further details will be
              available upon checkout or method of delivery from the chosen
              couriers.
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.textQuestion}>
              General delivery conditions
            </div>
            <div className={shippingStyles.answer}>
              Although we are strongly committed to delivering on time, delivery
              timelines are estimates only. Delivery times start from Order
              Confirmation. However, if we have yet to deliver your Order within
              30 days of Order Confirmation, we will provide you with a full
              refund. We are not responsible for failures to deliver for reasons
              outside our reasonable control, including where you are not
              available to take delivery of your Order or request postponement.
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12">
            <div className={shippingStyles.textQuestion}>
              Address changes & tracking
            </div>
            <div className={shippingStyles.answer}>
              Our Customer Care team at info@hubaradesign.com will be happy to
              assist with changing your preferred delivery date and address
              should you require it. However, if you have received an email
              informing you that your order has been dispatched, we won't be
              able to change your address. Please note that a change to an
              address outside of the original delivery country will not be
              possible.
            </div>
          </div>
          <div class="lg:col-span-4 col-span-12"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
