import React, { useState } from "react";
import "./App.scss";
import NewTask from "./components/NewItems/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import { Task } from "./types/task";

const DUMMY_TASKS: Task[] = [
  { title: "test", status: "complete", id:1 },
  { title: "test2", status: "imcomplete", id:2 },
];

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addTasksHandler = (task: Task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };
  return (
    <div className="background">
      <div className="container">
        <NewTask onAddTask={addTasksHandler}></NewTask>
        <Tasks tasks={tasks}></Tasks>
      </div>
    </div>
  );
}

export default App;
