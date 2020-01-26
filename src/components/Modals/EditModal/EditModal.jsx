import React from "react";
import styles from "./EditModal.module.css";
import ReactModal from "react-modal";
import Button from "../../common/Button/Button";
import TextInput from "../../common/TextInput/TextInput";

const customStyles = {
  overlay: { background: "rgba(0, 0, 0, 0.5)" },
  content: {
    minHeight: "120px",
    width: "340px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const EditModal = ({ isOpen, editedObject, onCancel, onSave, onChange }) => {
  const isDisabled = editedObject.name === "" || editedObject.temp === "";
  return (
    <ReactModal
      contentLabel={"Редактирование"}
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      onRequestClose={onCancel}
    >
      <div className={styles.edit_modal_content}>
        <div>Редактирование города</div>
        <div className={styles.edit_modal_inputs}>
          <TextInput
            name={"name"}
            value={editedObject.name ? editedObject.name : ""}
            onChange={onChange}
          />
          <TextInput
            name={"temp"}
            value={editedObject.temp ? editedObject.temp : ""}
            onChange={onChange}
          />
        </div>
        <div className={styles.edit_modal_buttons}>
          <Button text={"Отмена"} onClick={onCancel} />
          <Button disabled={isDisabled} text={"Сохранить"} onClick={onSave} />
        </div>
      </div>
    </ReactModal>
  );
};

export default EditModal;
