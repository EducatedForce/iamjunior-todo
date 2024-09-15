import styles from "./TasksList.module.scss";
import Task from "../Task/Task.tsx";
import {TasksListProps} from "../../types.ts";

const TasksList = ({status, tasks, setModalData}: TasksListProps) => {

  const heading = status === "open"
    ? "Open Tasks"
    : status === "active"
      ? "Active Tasks"
      : "Completed Tasks";

  const noTasksText = status === "open"
    ? "No Open Tasks"
    : status === "active"
      ? "No Active Tasks"
      : "No Completed Tasks";

  return (
    <div className={styles.tasksContainer}>
      <h2>{heading}</h2>
      <div className={styles.tasks}>
        {tasks.length > 0 && tasks.find((task) => task.status === status)
          ? tasks.map((task) => task.status === status ?
            <Task key={task.id} task={task}
                  setModalOpen={setModalData}/> : null)
          : <p>{noTasksText}</p>}
      </div>
    </div>
  );
};

export default TasksList;
