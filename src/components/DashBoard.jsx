import { ExpenseTotal } from "./ExpenseTotal";
import ExpenseForm from "./ExpenseForm";
import { LatestExpenses } from "./LatestExpenses";
import { SampleExpense } from "./SampleExpense";
import React, { useEffect } from "react";
import GraphSample from "./GraphSample"

const DashBoard = (props) => {

  const {user} =props;
  return (
    <>
      <ExpenseForm user={user}/>
      <h1>Expense Breakdown</h1>
      {/* <GraphSample user={user}/> */}
      <ExpenseTotal user={user}/>
      <SampleExpense></SampleExpense>
      <LatestExpenses user={user}></LatestExpenses>
    </>
  );
};

export default DashBoard;
