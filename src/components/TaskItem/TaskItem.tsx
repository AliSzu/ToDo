import React, { FC, useState } from "react";
import { Task } from "../../types/task";
import "./TaskItem.css";

interface TaskItemProps {
  task: Task;
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const [active, setActive] = useState(false);
  let btn_class = active ? "buttonActive" : "buttonDeactive";

  return (
    <div className="task" onClick={() => setActive(active ? false : true)}>
      <button
        className={btn_class}
      />
      {active ? (
        <div className="title">{task.title}</div>
      ) : (
        <div>{task.title}</div>
      )}
    </div>
  );
};

export default TaskItem;
