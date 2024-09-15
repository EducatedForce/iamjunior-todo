import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import styles from './TaskInput.module.scss';
import {TaskProps} from "../../types.ts";

import CircleLogo from "../CircleLogo/CircleLogo.tsx";
import {generateId} from "../../lib/generateId.ts";

const TaskInput = ({setTasks}: {
  setTasks: Dispatch<SetStateAction<TaskProps[]>>
}) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const clickHandler = () => {
    if (inputText) {
      const newTask: TaskProps = {
        id: generateId(),
        name: inputText,
        completed: false,
      };
      setTasks((prevState) => [...prevState, newTask]);
      setInputText("")
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
