import React, { FC } from 'react';
import "./card.css"


interface ICardProps {
    children: React.ReactNode;
    className: string;
  }

const Card: FC<ICardProps> = ({children, className}) => {
  const classes = "card " + className;

  return <div className={classes}>{children}</div>;
}

export default Card;
