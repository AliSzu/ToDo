import React, { FC } from 'react';
import Card from '../Card/Card';
import "./Tasks.scss"
import TaskItem from '../TaskItem/TaskItem';
import { Task } from '../../types/task';


interface ITasksProps {
  tasks: Task[]
}

const Tasks: FC<ITasksProps> = ({tasks}) => {
  return (
    <div className='container'>
    <Card className='tasks-container'>
      {tasks.map((item) => <TaskItem task={item} key={item.id}></TaskItem>)}
    </Card>
    </div>
  )
}

export default Tasks;
