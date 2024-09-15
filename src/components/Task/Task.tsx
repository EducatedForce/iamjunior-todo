import {TaskProps} from "../../types.ts";
import styles from "./Task.module.scss";

const Task = ({task}: { task: TaskProps }) => {
  return (
    <div className={styles.container}>
      <div className={styles.checkBoxContainer}>
        <div className={styles.round}>
          <input type="checkbox" name="checkbox" id="checkbox"/>
          <label htmlFor="checkbox"></label>
        </div>
      </div>
      {task.name}
    </div>
  );
};

export default Task;
