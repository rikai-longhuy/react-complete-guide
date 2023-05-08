import React, {useState} from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const fillteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filteredChangeHandler}
      />
      <ExpensesChart expenses={fillteredExpenses}/>
      <ExpensesList items={fillteredExpenses}/>
    </Card>
  )
}

export default Expenses;