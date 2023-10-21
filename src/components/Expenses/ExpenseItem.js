import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem = (props) => {
  const { date, details } = props;
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={date} />
        <ExpenseDetails details={details} />
        <button
          onClick={() => {
            console.log("clicked");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
