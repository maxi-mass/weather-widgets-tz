import React from "react";
import styles from "./Button.module.css";

const Button = ({ text }) => {
  return (
    <div className={styles.button}>
      <button>{text}</button>
    </div>
  );
};

export default Button;
