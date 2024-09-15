import styles from './App.module.scss';
import TaskInput from "./components/TaskInput/TaskInput.tsx";
import {useState} from "react";
import {TaskProps} from "./types.ts";
import Task from "./components/Task/Task.tsx";


function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <div className={styles.containerMain}>
      <h1>My Tasks</h1>
      <div>
        <TaskInput setTasks={setTasks}/>
      </div>
      <div className={styles.tasksContainer}>
        <h2>Open Tasks</h2>
        <div className={styles.tasks}>
          {tasks.length > 0 && tasks.find((task) => !task.completed)
            ? tasks.map((task) => <Task key={task.id} task={task} />)
            : <p>No Open tasks</p>}
        </div>
      </div>
      <div className={styles.tasksContainer}>
        <h2>Completed Tasks</h2>
        <div className={styles.tasks}>
          {tasks.length > 0 && tasks.find((task) => task.completed)
            ? tasks.map((task) => <p key={task.id}>{task.name}</p>)
            : <p>No Completed tasks</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
