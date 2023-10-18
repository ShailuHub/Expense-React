import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: "2023-05-01",
      title: "Groceries",
      amount: 50.0,
    },
    {
      date: "2023-05-02",
      title: "Dinner",
      amount: 30.0,
    },
    {
      date: "2023-05-03",
      title: "Gasoline",
      amount: 40.0,
    },
    {
      date: "2023-06-20",
      title: "Movie tickets",
      amount: 25.0,
    },
  ];
  return (
    <div>
      {expenses.map((item, idx) => {
        return (
          <ExpenseItem
            key={idx}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        );
      })}
    </div>
  );
}

export default App;
