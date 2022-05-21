import { Expense } from "./Expense";
import ExpenseForm from "./ExpenseForm";
import { LatestOrders } from "./LatestOrders";
import { Sample } from "./Sample";

const DashBoard = () => {
  return (
    <>
      <ExpenseForm />
      <h1>DashBoard</h1>
      <Expense />
      <Sample></Sample>
      <LatestOrders></LatestOrders>
    </>
  );
};

export default DashBoard;
