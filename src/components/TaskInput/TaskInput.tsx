import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import styles from './TaskInput.module.scss';
import {TaskProps} from "../../types.ts";

import CircleLogo from "../CircleLogo/CircleLogo.tsx";
import {generateId} from "../../lib/generateId.ts";
import {getLocalStorageTasks} from "../../lib/getLocalStorageTasks.ts";

const TaskInput = ({setTasks}: {
  setTasks: Dispatch<SetStateAction<TaskProps[]>>
}) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const clickHandler = () => {
    const storedTasks: TaskProps[] = getLocalStorageTasks()

    if (inputText) {
      const newTask: TaskProps = {
        id: generateId(),
        name: inputText,
        status: "open",
      };
      setTasks((prevState) => [...prevState, newTask]);
      storedTasks.push(newTask);

      localStorage.setItem("tasksIAJ", JSON.stringify(storedTasks));
      setInputText("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        id="task-input"
        name="task-input"
        placeholder="Enter task..."
        onChange={handleChange}
        value={inputText}
      />
      <CircleLogo onClick={clickHandler}/>
    </div>
  );
};

export default TaskInput;
