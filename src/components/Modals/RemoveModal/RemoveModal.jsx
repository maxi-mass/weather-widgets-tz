import React from "react";
import styles from "./RemoveModal.module.css";
import ReactModal from "react-modal";
import Button from "../../common/Button/Button";

const customStyles = {
  overlay: { background: "rgba(0, 0, 0, 0.5)" },
  content: {
    minHeight: "120px",
    width: "300px",
    display: "flex",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const RemoveModal = ({ isOpen, name, onCancel, onRemove }) => {
  return (
    <ReactModal
      contentLabel={"Подтверждение удаления"}
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      onRequestClose={onCancel}
    >
      <div className={styles.remove_modal_content}>
        <div>Переместить город {name} в удаленные?</div>
        <div className={styles.remove_modal_buttons}>
          <Button text={"Отмена"} onClick={onCancel} />
          <Button text={"Переместить"} onClick={onRemove} />
        </div>
      </div>
    </ReactModal>
  );
};

export default RemoveModal;
