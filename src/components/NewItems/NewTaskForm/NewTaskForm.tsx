import React, { FC, useState } from "react";
import { Task } from "../../../types/task";
import "./NewTaskForm.scss";

interface ITaskFormProps {
  onSaveTask: (params: Task) => void;
}

const TaskForm: FC<ITaskFormProps> = ({onSaveTask}) => {
  const [taskName, setTaskName] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const task: Task = {
      title: taskName,
      status: 'test',
      id: Math.random()
    };
    onSaveTask(task);
    setTaskName('');
  }

  return (
    <form onSubmit={submitHandler}>
      <input className="form__field" type="text" value={taskName}
            onChange={(event) => setTaskName(event.target.value)} />
    </form>
  );
};

export default TaskForm;
