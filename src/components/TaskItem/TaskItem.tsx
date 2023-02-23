import React, { FC, useState } from "react";
import { Task } from "../../types/task";
import "./TaskItem.scss";
import image from '../../assets/trash-icon.png'

interface ITaskItemProps {
  task: Task;
  onDeleteTask: (params: number) => void
}

const TaskItem: FC<ITaskItemProps> = ({ task, onDeleteTask }) => {
  const [isActive, setIsActive] = useState(false);
  let btn_class = isActive ? "task__button--active" : "task__button--basic";

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
      <img src={image} className="task__delete-button" onClick={() => (onDeleteTask(task.id))}/>
    </div>
  );
};

export default TaskItem;
