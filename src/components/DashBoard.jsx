import { ExpenseTotal } from "./ExpenseTotal";
import ExpenseForm from "./ExpenseForm";
import { LatestExpenses } from "./LatestExpenses";
import { SampleExpense } from "./SampleExpense";
import React, { useEffect } from "react";


const DashBoard = () => {

      useEffect(() => {     
       console.log(window.sessionStorage.isLoggedIn)
       console.log(typeof window.sessionStorage.isLoggedIn === "string")
      }, [])

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
