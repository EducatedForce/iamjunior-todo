import {Dispatch, SetStateAction} from "react";

export interface TaskStatus {
  status: "open" | "active" | "completed";
}

export interface TaskProps extends TaskStatus {
  id: string;
  name: string;
}

export interface TasksListProps extends TaskStatus {
  tasks: TaskProps[];
  setModalData: Dispatch<SetStateAction<TaskProps | null>>
}
