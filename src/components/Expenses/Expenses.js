import React, { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter.js";
import ExpensesList from "./ExpensesList.js";
import Card from "../UI/Card.js";
import ExpensesChart from "./ExpensesChart.js";

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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
        
      </Card>
    </div>
  );
};

export default Expenses;
