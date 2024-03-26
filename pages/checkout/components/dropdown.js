import { useState } from "react";
import styles from "../../../styles/checkoutStyles/dropdown.module.css";

const Dropdown = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (index) => {
    setSelectedValue(index);
    onSelect(index);
  };

  return (
    <select
      className={styles.parent}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={index}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
