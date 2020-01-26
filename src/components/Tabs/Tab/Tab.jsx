import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Tab.module.css";
import {
  remove,
  returnFromRemoved,
  up,
  down,
  update
} from "../../../store/actions/weatherActions";
import RemoveModal from "../../Modals/RemoveModal/RemoveModal";
import EditModal from "../../Modals/EditModal/EditModal";
import Table from "../../Table/Table";

const Tab = ({ status, data }) => {
  const [removeModal, setRemoveModal] = useState({
    isOpen: false,
    removingCityObject: {}
  });

  const [editModal, setEditModal] = useState({
    isOpen: false,
    editingCityObject: {}
  });

  const removeCancelHandler = () => {
    setRemoveModal({
      isOpen: false,
      removingCityObject: {}
    });
  };

  const removeHandler = () => {
    dispatch(remove(removeModal.removingCityObject.id));
    setRemoveModal({
      isOpen: false,
      removingCityObject: {}
    });
  };

  const editCancelHandler = () => {
    setEditModal({
      isOpen: false,
      editingCityObject: {}
    });
  };

  const changeEditHandler = e => {
    const newState = {
      isOpen: true,
      editingCityObject: { ...editModal.editingCityObject }
    };
    newState.editingCityObject[e.target.name] = e.target.value;
    setEditModal(newState);
  };

  const saveHandler = () => {
    dispatch(update(editModal.editingCityObject));
    editCancelHandler();
  };

  const statuses = { active: "Активен", deleted: "Удален" };
  const dispatch = useDispatch();

  let filteredData = data;
  if (status !== "all") {
    filteredData = data.filter(item => item.status === status);
  }
  return (
    <div className={styles.tab}>
      {filteredData.length > 0 && (
        <Table
          data={filteredData}
          statuses={statuses}
          dispatch={dispatch}
          up={up}
          down={down}
          setRemoveModal={setRemoveModal}
          setEditModal={setEditModal}
          returnFromRemoved={returnFromRemoved}
        />
      )}
      <RemoveModal
        isOpen={removeModal.isOpen}
        name={removeModal.removingCityObject.name}
        onCancel={removeCancelHandler}
        onRemove={removeHandler}
      />
      <EditModal
        isOpen={editModal.isOpen}
        editedObject={editModal.editingCityObject}
        onCancel={editCancelHandler}
        onSave={saveHandler}
        onChange={changeEditHandler}
      />
    </div>
  );
};

export default Tab;
