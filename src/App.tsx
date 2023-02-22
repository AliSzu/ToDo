import React from 'react';
import './App.css';
import Card from './components/card/card';
import Bar from './components/bar/bar';
import Tasks from './components/tasks/tasks';
import { Task } from './types/task';

const DUMMY_TASKS: Task[] = [
  {title: 'test',
    status: 'complete'},
    {title: 'test2',
    status: 'imcomplete'},
    {title: 'test2',
    status: 'imcomplete'},
    {title: 'test2',
    status: 'imcomplete'},
    {title: 'test2',
    status: 'imcomplete'},
    {title: 'test2',
    status: 'imcomplete'},

]

function App() {
  return (
    <div className='background'>
      <div className='container'>
      <Bar></Bar>
      <Tasks tasks={DUMMY_TASKS}></Tasks>
    </div>
    </div>
  );
}

export default App;
