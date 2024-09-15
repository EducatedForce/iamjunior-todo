import ReactDOM from "react-dom";
import styles from "./TaskModal.module.scss";
import {Dispatch, SetStateAction} from "react";
import {TaskProps} from "../../types.ts";

const TaskModal = ({modalData, setModalData}: {
  modalData: TaskProps | null,
  setModalData: Dispatch<SetStateAction<TaskProps | null>>
}) => {
  if (!modalData) return null;

  const clickHandler = () => {
    setModalData(null);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={clickHandler}/>,
        document.getElementById("backdrop") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <div className={styles.modal}>
          {modalData.name}
        </div>,
        document.getElementById("modal") as HTMLElement
      )}
    </>
  );

};

export default TaskModal;
