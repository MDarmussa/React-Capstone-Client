import { ExpenseTotal } from "./ExpenseTotal";
import ExpenseForm from "./ExpenseForm";
import { LatestExpenses } from "./LatestExpenses";
import { SampleExpense } from "./SampleExpense";
import React, { useEffect } from "react";

const DashBoard = () => {
  return (
    <>
      <ExpenseForm />
      <h1>DashBoard</h1>
      <ExpenseTotal />
      <SampleExpense></SampleExpense>
      <LatestExpenses></LatestExpenses>
    </>
  );
};

export default DashBoard;
