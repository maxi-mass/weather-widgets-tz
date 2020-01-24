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
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.temp}</td>
              <td>{item.status}</td>
              <td onClick={() => console.log("Up...")}>
                <span>Вверх</span>
              </td>
              <td onClick={() => console.log("Down...")}>
                <span>Вниз</span>
              </td>
              <td>
                <span>Удалить/Восстановить</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tab;
