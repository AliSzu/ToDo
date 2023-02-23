import React, { useState } from "react";
import "./App.scss";
import NewTask from "./components/NewItems/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import { Task } from "./types/task";
import { Status } from "./types/status";

const DUMMY_TASKS: Task[] = [
  { title: "test complete", status: Status.Complete, id:1 },
  { title: "test incomplete", status: Status.Incomplete, id:2 },
];

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addTasksHandler = (task: Task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const deleteIdHandler = (id: number) => {
    const filteredTasks: Task[] = tasks.filter((task) => {return task.id !== id;});
    setTasks(filteredTasks);
  }
  
  return (
    <div className="background">
      <div className="container">
        <NewTask onAddTask={addTasksHandler}></NewTask>
        <Tasks onSaveId={deleteIdHandler} tasksList={tasks}></Tasks>
      </div>
    </div>
  );
}

export default App;
