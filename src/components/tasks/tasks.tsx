import React, { FC, useState } from "react";
import Card from "../Card/Card";
import "./Tasks.scss";
import { Task } from "../../types/task";
import TaskItem from "../TaskItem/TaskItem";
import TaskFilter from "../TaskFilter/TaskFilter";
import { Status } from "../../types/status";

interface ITasksProps {
  tasksList: Task[];
  onSaveId: (params: number) => void;
}

const Tasks: FC<ITasksProps> = ({ tasksList, onSaveId}) => {
  const[status, setStatus] = useState('All')

  return (
      <Card className="tasks-container">
        <TaskFilter selectedStatus={status} onFilterTask={(status: string) => setStatus(status)}></TaskFilter>
        {tasksList.map((item) => (
          <TaskItem
          onDeleteTask={(id:number) => (onSaveId(id))}
            task={item}
            key={item.id}
          ></TaskItem>
        ))}
      </Card>
  );
};

export default Tasks;
