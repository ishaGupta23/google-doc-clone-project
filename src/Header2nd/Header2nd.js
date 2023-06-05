import React from "react";
import styles from "./header2nd.module.css";
import ToggleButtonsMultiple from "./ToggleButtonsMultiple";

const Header2nd = () => {
 
return (
    <div className={styles.main}>
      <div className={styles.container}>
    <ToggleButtonsMultiple />

      </div>
    </div>
  );
};

export default Header2nd;
