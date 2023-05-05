import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import './ExpensesItem.css';

const ExpensesItem = (props) =>{
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () =>{
  //   setTitle('Update!!');
  //   console.log(title);
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description"> 
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          ${props.amount}
        </div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  )
}

export default ExpensesItem;
