import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Tab.module.css";
import {
  remove,
  returnFromRemoved,
  up,
  down
} from "../../../../store/actions/weatherActions";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const Tab = ({ status, data }) => {
  const [removeModal, setRemoveModal] = useState({
    isOpen: false,
    removingCityObject: {}
  });

  const [editModal, setEditModal] = useState({
    isOpen: false,
    editingCityObject: {}
  });

  const statuses = { active: "Активен", deleted: "Удален" };
  const dispatch = useDispatch();

  let filteredData = data;
  if (status) {
    filteredData = data.filter(item => item.status === status);
  }
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
            <td></td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.temp}</td>
              <td>{statuses[item.status]}</td>
              <td className={styles.action_button}>
                <div title={"Вверх"} onClick={() => dispatch(up(item))}>
                  <img src={require("../../../../assets/icons/up.svg")} />
                </div>
              </td>
              <td className={styles.action_button}>
                <div title={"Вниз"} onClick={() => dispatch(down(item))}>
                  <img src={require("../../../../assets/icons/down.svg")} />
                </div>
              </td>
              <td className={styles.action_button}>
                <div
                  title={"Удалить"}
                  onClick={() => {
                    setRemoveModal({
                      isOpen: true,
                      removingCityObject: item
                    });
                  }}
                >
                  <img src={require("../../../../assets/icons/remove.svg")} />
                </div>
              </td>
              <td className={styles.action_button}>
                <div
                  title={"Восстановить"}
                  onClick={() => {
                    dispatch(returnFromRemoved(item.id));
                  }}
                >
                  <img src={require("../../../../assets/icons/return.svg")} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={removeModal.isOpen} style={customStyles}>
        <div>
          Удалить город {removeModal.removingCityObject.name} из списка?
          <button
            onClick={() => dispatch(remove(removeModal.removingCityObject.id))}
          >
            Удалить
          </button>
        </div>
      </Modal>
      <Modal isOpen={editModal.isOpen} style={customStyles}></Modal>
    </div>
  );
};

export default Tab;
