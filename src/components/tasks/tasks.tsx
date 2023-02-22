import React, { FC } from 'react';
import Card from '../card/card';
import "./tasks.css"
import TaskItem from '../TaskItem/TaskItem';
import { Task } from '../../types/task';


interface ITasksProps {
  tasks: Task[]
}

const Tasks: FC<ITasksProps> = ({tasks}) => {
  return (
    <Card className='tasks-container'>
      {tasks.map((item) => <TaskItem task={item}></TaskItem>)}
    </Card>
  )
}

export default Tasks;
