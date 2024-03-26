import React from "react";
import styles from "../../../styles/checkoutStyles/formItem.module.css";
const BiggerItemContainer = ({ child, title }) => {
  return (
    <div className={styles.parentSecond}>
      <div className={`inline-block ${styles.titleDiv}`}>{title}</div>
      <div className={styles.borderedDivSecond}>
        <div className={styles.inputText}>{child}</div>
      </div>
    </div>
  );
};

export default BiggerItemContainer;
