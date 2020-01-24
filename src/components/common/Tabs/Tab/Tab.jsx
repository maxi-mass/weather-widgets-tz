import React from "react";
import styles from "./Tab.module.css";

const Tab = ({ widgets }) => {
  return <div className={styles.tab}>{widgets}</div>;
};

export default Tab;
