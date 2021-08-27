import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter.js";
import Card from "../UI/Card.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const SelectYearHandler = (yearData) => {
    setFilteredYear(yearData);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSelectYear={SelectYearHandler}
        />

        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
