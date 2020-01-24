import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <div className={styles.button}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
