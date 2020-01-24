import React, { useEffect } from "react";
import styles from "./Tab.module.css";

const Tab = ({ status, data }) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.tab}>
      <table>
        <thead>
          <tr>
            <td>Название</td>
            <td>Температура</td>
            <td>Статус</td>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.temp}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tab;
