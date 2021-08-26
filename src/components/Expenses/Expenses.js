import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter.js";
import Card from "../UI/Card.js";

const Expenses = (props) => {
  const SelectYearHandler = (yearData) => {
    console.log(yearData);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onSelectYear={SelectYearHandler} />
        <ExpenseItem
          title={props.expense[0].title}
          amount={props.expense[0].amount}
          date={props.expense[0].date}
        />
        <ExpenseItem
          title={props.expense[1].title}
          amount={props.expense[1].amount}
          date={props.expense[1].date}
        />
        <ExpenseItem
          title={props.expense[2].title}
          amount={props.expense[2].amount}
          date={props.expense[2].date}
        />
        <ExpenseItem
          title={props.expense[3].title}
          amount={props.expense[3].amount}
          date={props.expense[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
