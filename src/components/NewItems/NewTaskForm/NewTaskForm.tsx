import React, { FC, useState } from "react";
import { Task } from "../../../types/task";
import "./NewTaskForm.scss";
import { Status } from "../../../types/status";

interface ITaskFormProps {
  onSaveTask: (params: Task) => void;
}

const TaskForm: FC<ITaskFormProps> = ({ onSaveTask }) => {
  const [taskName, setTaskName] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskName !== "") {
      const task: Task = {
        title: taskName,
        status: Status.Incomplete,
        id: Math.random(),
      };
      onSaveTask(task);
      setTaskName("");
    }
  };

  const blabla = (event: any) => {
    console.log(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        className="form__field"
        placeholder="Add your own ToDo's!"
        type="text"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
    </form>
  );
};

export default TaskForm;
