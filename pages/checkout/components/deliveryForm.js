import React, { useState } from "react";
import styles from "../../../styles/checkoutStyles/formStyles.module.css";
import FormItemContainer from "./formItemContainer";
import Dropdown from "./dropdown";

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
                title={"Phone"}
                child={
                  <input
                    type="number"
                    placeholder="Phone"
                    className={`inputText w-full mt-1 border-none border-b-2 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-none ${styles.inputColor} `}
                  />
                }
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryForm;
