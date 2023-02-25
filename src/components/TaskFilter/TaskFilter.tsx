import React, { FC, useState } from 'react';
import "./TaskFilter.scss"
import { Status } from '../../types/status';


interface ITaskFilterProps {
  onFilterTask: (params: string) => void
  selectedStatus: string;
}

const TaskFilter: FC<ITaskFilterProps> = ({onFilterTask, selectedStatus}) => {
  const statusChangeHandler = (event: any) => {
    onFilterTask(event.target.value);
  }

  return (
    <div className='filter_container'>
      <select defaultValue={selectedStatus} className='filter' onChange={statusChangeHandler}>
        <option value='All'>All</option>
        <option value='Incomplete'>Incomplete</option>
        <option value='Complete'>Complete</option>
      </select>
      </div>
  )
}

export default TaskFilter;
