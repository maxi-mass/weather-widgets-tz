import React from "react";
import styles from "./Table.module.css";

const Table = ({
  data,
  dispatch,
  setRemoveModal,
  returnFromRemoved,
  up,
  down,
  statuses,
  setEditModal
}) => {
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <td>Название</td>
            <td>Температура</td>
            <td>Статус</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr
              key={item.id}
              onClick={e => {
                e.stopPropagation();
                setEditModal({
                  isOpen: true,
                  editingCityObject: item
                });
              }}
            >
              <td>{item.name}</td>
              <td>{item.temp}</td>
              <td>{statuses[item.status]}</td>
              <td className={styles.action_button}>
                <div
                  title={"Вверх"}
                  onClick={e => {
                    e.stopPropagation();
                    dispatch(up(item));
                  }}
                >
                  <img src={require("../../assets/icons/up.svg")} alt={"Up"} />
                </div>
              </td>
              <td className={styles.action_button}>
                <div
                  title={"Вниз"}
                  onClick={e => {
                    e.stopPropagation();
                    dispatch(down(item));
                  }}
                >
                  <img
                    src={require("../../assets/icons/down.svg")}
                    alt={"Down"}
                  />
                </div>
              </td>
              <td className={styles.action_button}>
                {(item.status === "active" || item.status === "all") && (
                  <div
                    title={"Удалить"}
                    onClick={e => {
                      e.stopPropagation();
                      setRemoveModal({
                        isOpen: true,
                        removingCityObject: item
                      });
                    }}
                  >
                    <img
                      src={require("../../assets/icons/remove.svg")}
                      alt={"Remove"}
                    />
                  </div>
                )}
              </td>
              <td className={styles.action_button}>
                {item.status === "deleted" && (
                  <div
                    title={"Восстановить"}
                    onClick={e => {
                      e.stopPropagation();
                      dispatch(returnFromRemoved(item.id));
                    }}
                  >
                    <img
                      src={require("../../assets/icons/return.svg")}
                      alt={"Edit"}
                    />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
