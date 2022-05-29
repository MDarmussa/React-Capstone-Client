import { ExpenseTotal } from "./ExpenseTotal";
import ExpenseForm from "./ExpenseForm";
import { LatestExpenses } from "./LatestExpenses";
import { SampleExpense } from "./SampleExpense";
import React, { useEffect } from "react";
import BarChart from "./BarChart"

const DashBoard = (props) => {

  const {user, expense} =props;
  return (
    <>
      <ExpenseForm user={user}/>
      <h1>Expense Breakdown</h1>
      <div style={{width: 700}}>
      {/* <BarChart user={user}/> */}
      </div>
      <ExpenseTotal user={user}/>
      <SampleExpense></SampleExpense>
      <LatestExpenses user={user} expense={expense}></LatestExpenses>
    </>
  );
};

export default DashBoard;
