import { Expense } from "./Expense";
import ExpenseForm from "./ExpenseForm";
import { LatestOrders } from "./LatestOrders";
import { Sample } from "./Sample";
import React, { useState, setState, useEffect } from "react";


const DashBoard = () => {

      useEffect(() => {     
       console.log(window.sessionStorage.isLoggedIn)
       console.log(typeof window.sessionStorage.isLoggedIn === "string")
      }, [])

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
