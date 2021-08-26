import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // useState() always returns an array with two elements
  // First element:  title = pointer to value of props.title
  // Second element: setTitle = function to set a new title

  const clickHandler = () => {
    setTitle("Updated!"); //by calling this function, tells React to re-evaluate component/JSX code again
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
