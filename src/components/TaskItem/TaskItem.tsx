import React, { FC, useState } from "react";
import { Task } from "../../types/task";
import "./TaskItem.scss";

interface ITaskItemProps {
  task: Task;
}

const TaskItem: FC<ITaskItemProps> = ({ task}) => {
  const [isActive, setIsActive] = useState(false);
  let btn_class = isActive ? "task__button--active" : "task__button--basic";

  const deleteTaskHandler = () => {
  }

  return (
    <div className="task-container">
      <div className="task" onClick={() => setIsActive(isActive ? false : true)}>
      <button className={btn_class} />
      {isActive ? (
        <div className="title">{task.title}</div>
      ) : (
        <div>{task.title}</div>
      )}
      </div>
      <button className="task__delete-button">DELETE</button>
    </div>
  );
};

export default TaskItem;
