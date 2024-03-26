import React from "react";
import styles from "../../../styles/checkoutStyles/formItem.module.css";
const FormItemContainer = ({ child, title }) => {
  return (
    <div className={styles.parent}>
      <div className={`inline-block ${styles.titleDiv}`}>{title}</div>
      <div className={styles.borderedDiv}>
        <div className={styles.inputText}>{child}</div>
      </div>
    </div>
  );
};

export default FormItemContainer;
