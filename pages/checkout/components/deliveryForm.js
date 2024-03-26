import React, { useState } from "react";
import styles from "../../../styles/checkoutStyles/formStyles.module.css";
import FormItemContainer from "./formItemContainer";
import Dropdown from "./dropdown";
import { Spacer } from "@nextui-org/react";
import { FormControlLabel, FormGroup } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import BiggerItemContainer from "./biggerItemContainer";

const DeliveryForm = () => {
  const countries = [
    "United Arab Emirates",
    "Saudi Arab",
    "Turki",
    "Pakistan",
    "India",
    "Kuwait",
    "Qatar",
    "Mera Pind",
  ];
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const handleCountryChanged = (index) => {
    setSelectedCountryIndex(index);
  };

  const [phone, setPhone] = useState("");

  const handleCityChanged = (index) => {
    setSelectedCityIndex(index);
  };

  const cities = ["Dubai", "Abu Zahbi", "Oman", "Ajman"];

  const [isChecked, setIsChecked] = useState(false);

  // Handler for checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <div className={styles.shippingText}>SHIPPING DETAILS</div>
      <div>
        <form>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"Country"}
                child={
                  <Dropdown
                    options={countries}
                    onSelect={handleCountryChanged}
                  />
                }
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"CITY / EMIRATES"}
                child={
                  <Dropdown options={cities} onSelect={handleCityChanged} />
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"State *"}
                child={
                  <input
                    type="text"
                    placeholder="State"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"Postal Code"}
                child={
                  <input
                    type="number"
                    placeholder="Postal Code"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-12">
              <FormItemContainer
                title={"Shipping Address *"}
                child={
                  <input
                    type="text"
                    placeholder="Shipping Address"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
          </div>
          <Spacer y={5} />
          <div className={styles.shippingText}>YOUR INFOMATION</div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"First Name*"}
                child={
                  <input
                    required
                    type="text"
                    placeholder="First Name"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"Last Name *"}
                child={
                  <input
                    required
                    type="text"
                    placeholder="Last Name"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"Phone *"}
                child={
                  <input
                    required
                    type="number"
                    placeholder="Phone Number"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"Email *"}
                child={
                  <input
                    required
                    type="email"
                    placeholder="Email "
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
          </div>

          <div className={styles.rememberMeButton}>
            <FormControlLabel
              control={<CheckBox checked={isChecked} color="primary" />}
              label="Ship to a different Address"
            />
          </div>
          <Spacer y={10} />
          <div className={styles.shippingText}>SHIPPING Address</div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"Country"}
                child={
                  <Dropdown
                    options={countries}
                    onSelect={handleCountryChanged}
                  />
                }
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"CITY / EMIRATES"}
                child={
                  <Dropdown options={cities} onSelect={handleCityChanged} />
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"State *"}
                child={
                  <input
                    type="text"
                    placeholder="State"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"Postal Code"}
                child={
                  <input
                    type="number"
                    placeholder="Postal Code"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-12">
              <FormItemContainer
                title={"Shipping Address *"}
                child={
                  <input
                    type="text"
                    placeholder="Shipping Address"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
          </div>
          <Spacer y={5} />
          <div className={styles.shippingText}>Personal Information</div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"First Name*"}
                child={
                  <input
                    required
                    type="text"
                    placeholder="First Name"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"Last Name *"}
                child={
                  <input
                    required
                    type="text"
                    placeholder="Last Name"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"Phone *"}
                child={
                  <input
                    required
                    type="number"
                    placeholder="Phone Number"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <FormItemContainer
                title={"Email *"}
                child={
                  <input
                    required
                    type="email"
                    placeholder="Email "
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-12">
              <BiggerItemContainer
                title={"Shipping Notes *"}
                child={
                  <textarea
                    required
                    rows="5.5"
                    cols="50"
                    type="text"
                    placeholder="Note about your order, e.g. special note for delivery"
                    className={`resize-none border inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-9"></div>
            <div className="col-span-12 md:col-span-3">
              <div className={styles.proceedBtn}>PROCEED TO PAYMENT</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryForm;
