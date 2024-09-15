import styles from './App.module.scss';
import TaskInput from "./components/TaskInput/TaskInput.tsx";
import {useEffect, useState} from "react";
import {TaskProps} from "./types.ts";
import TasksList from "./components/TasksList/TasksList.tsx";
import Button from "./components/Button/Button.tsx";
import {getLocalStorageTasks} from "./lib/getLocalStorageTasks.ts";
import TaskModal from "./components/TaskModal/TaskModal.tsx";


function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [modalData, setModalData] = useState<TaskProps | null>(null);

  useEffect(() => {
    const storedTasks: TaskProps[] = getLocalStorageTasks();
    if (storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  const clickHandler = () => {
    localStorage.removeItem("tasksIAJ");
    setTasks([]);
  };



  return (
    <div className={styles.containerMain}>
      <h1>My Tasks</h1>
      <TaskInput setTasks={setTasks}/>
      <TasksList tasks={tasks} status="open" setModalData={setModalData}/>
      <TasksList tasks={tasks} status="active" setModalData={setModalData}/>
      <TasksList tasks={tasks} status="completed" setModalData={setModalData}/>
      <Button onClick={clickHandler}>Clear Tasks Storage</Button>
      <TaskModal modalData={modalData} setModalData={setModalData}/>
    </div>
  );
}

export default App;
