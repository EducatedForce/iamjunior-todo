import {TaskProps} from "../../types.ts";
import styles from "./Task.module.scss";
import {BiEditAlt} from "react-icons/bi";
import CheckBox from "../CheckBox/CheckBox.tsx";
import {Dispatch, SetStateAction} from "react";

const Task = ({task, setModalOpen}: {
  task: TaskProps,
  setModalOpen: Dispatch<SetStateAction<TaskProps | null>>
}) => {

  const clickHandler = ()=>{
    setModalOpen(task);
  }

  return (
    <div className={styles.container}>
      <CheckBox taskType={{status: task.status}}/>
      <p>{task.name}</p>
      <div className={styles.edit} onClick={clickHandler}>
        <BiEditAlt/>
      </div>
    </div>
  );
};

export default Task;
