import React, { FC } from 'react';
import "./NewTask.scss"
import Card from '../../Card/Card';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import { Task } from '../../../types/task';


interface INewTaskProps {
  onAddTask: (params: Task) => void;
}

const NewTask: FC<INewTaskProps> = ({onAddTask}) => {

  const saveTaskHandler = (enteredTask: Task) => {
    onAddTask(enteredTask);
  };

  return(
    <Card className='bar'>
      <NewTaskForm onSaveTask={saveTaskHandler}></NewTaskForm>
    </Card>
  )
}

export default NewTask;
