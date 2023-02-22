import React, { FC } from 'react';
import "./bar.css"
import Card from '../card/card';


interface BarProps {}

const Bar: FC<BarProps> = () => {
  return(
    <Card className='bar'>Task</Card>
  )
}

export default Bar;
