import React from "react";
import styles from "./Button.module.css";

const Button = ({ disabled, text, onClick }) => {
  return (
    <div className={styles.button}>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
