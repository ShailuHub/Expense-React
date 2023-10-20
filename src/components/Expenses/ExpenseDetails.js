import "./ExpenseItem.css";
const ExpenseDetails = (props) => {
  const { title, amount, location } = props.details;
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">{location}</div>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
};

export default ExpenseDetails;
