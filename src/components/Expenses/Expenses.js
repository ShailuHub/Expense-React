import ExpenseItem from "./ExpenseItem";
import React from "react";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = () => {
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
  return (
    <Card className="expenses">
      {expenses.map((item, idx) => {
        const details = {
          title: item.title,
          amount: item.amount,
          location: item.location,
        };
        return <ExpenseItem key={idx} date={item.date} details={details} />;
      })}
    </Card>
  );
};

export default Expenses;
