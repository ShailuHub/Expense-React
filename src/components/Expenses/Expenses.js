import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpenseFilter";

const expenses = [
  {
    date: new Date("2023-05-01"),
    title: "Groceries",
    amount: 50.0,
    location: "Vegetable Market",
  },
  {
    date: new Date("2023-05-02"),
    title: "Dinner",
    amount: 30.0,
    location: "Hotel Paradise",
  },
  {
    date: new Date("2023-05-03"),
    title: "Gasoline",
    amount: 40.0,
    location: "Bharat Pateroleum",
  },
  {
    date: new Date("2023-06-20"),
    title: "Movie tickets",
    amount: 25.0,
    location: "Forum Mall",
  },
];

const Expenses = () => {
  const [expense, setExpense] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState("2023");
  const addExpenseHandler = (expense) => {
    setExpense((previousState) => {
      return [expense, ...previousState];
    });
  };
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredItems = expense.filter((item) => {
    return filteredYear === item.date.getFullYear().toString();
  });
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredItems.map((item, idx) => {
          const details = {
            title: item.title,
            amount: item.amount,
            location: item.location,
          };
          return <ExpenseItem key={idx} date={item.date} details={details} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
