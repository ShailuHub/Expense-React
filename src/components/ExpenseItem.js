import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  const { date, details } = props;
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails details={details} />
    </div>
  );
}

export default ExpenseItem;
