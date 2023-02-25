import React, { useEffect, useState } from "react";
import "./App.scss";
import NewTask from "./components/NewItems/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import { Task } from "./types/task";
import { Status } from "./types/status";
import TaskFilter from "./components/TaskFilter/TaskFilter";

const DUMMY_TASKS: Task[] = [
  { title: "Smile more! :)", status: Status.Incomplete, id:1 },
];

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  const [deleteId, setDeleteId] = useState(-1);

  const addTasksHandler = (task: Task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  useEffect(() => {
    const filteredTasks: Task[] = tasks.filter((task) => {return task.id !== deleteId});
    setTasks(filteredTasks);
  }, [deleteId]);

  const deleteIdHandler = (id: number) => {
    setDeleteId(id);

    //const filteredTasks: Task[] = tasks.filter((task) => {return task.id !== deleteId});
    //setTasks(filteredTasks);
  };

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
