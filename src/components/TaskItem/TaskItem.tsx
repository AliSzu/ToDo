import React, { FC, useState } from "react";
import { Task } from "../../types/task";
import "./TaskItem.scss";
import image from '../../assets/trash-icon.png'
import { Status } from "../../types/status";

interface ITaskItemProps {
  task: Task;
  onDeleteTask: (params: number) => void
}

const TaskItem: FC<ITaskItemProps> = ({ task, onDeleteTask }) => {
  const [isComplete, setIsComplete] = useState(task.status === Status.Complete)
  let btn_class = isComplete ? "task__button--active" : "task__button--basic";

  return (
    <div className="task-container">
      <div className="task" onClick={() => setIsComplete(isComplete ? false : true)}>
      <button className={btn_class} />
      {isComplete ? (
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
