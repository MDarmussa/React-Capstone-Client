import { ExpenseTotal } from "./ExpenseTotal";
import ExpenseForm from "./ExpenseForm";
import { LatestExpenses } from "./LatestExpenses";
import { SampleExpense } from "./SampleExpense";
import React, { useEffect } from "react";

const DashBoard = (props) => {

  const {user} =props;
  return (
    <>
      <ExpenseForm user={user}/>
      <h1>DashBoard</h1>
      <ExpenseTotal />
      <SampleExpense></SampleExpense>
      <LatestExpenses user={user}></LatestExpenses>
    </>
  );
};

export default DashBoard;
