import styles from './CheckBox.module.scss';
import {TaskStatus} from "../../types.ts";

const CheckBox = ({taskType}: { taskType:TaskStatus}) => {
  const taskClass = taskType.status === "open"
    ? styles.open
    : taskType.status === "active"
      ? styles.active
      : styles.completed;
  return (
    <div className={`${styles.container} ${taskClass}`}>

    </div>
  );
};

export default CheckBox;
