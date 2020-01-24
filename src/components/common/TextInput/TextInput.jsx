import React from "react";
import styles from "./TextInput.module.css";

const TextInput = props => {
  return (
    <div className={styles.text_input}>
      <input {...props} />
    </div>
  );
};

export default TextInput;
