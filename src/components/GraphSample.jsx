import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function GraphSample(props) {
  const [expenses, setExpenses] = useState([]);

  const { user } = props;

  useEffect(() => {
    const getExpenses = axios({
      url: `http://localhost:8080/expense/userExpenses/${user._id}`, //taken from server.js line 33
      method: "GET",
      // data: payload
    })
      .then((response) => {
        console.log("I am the response", response);
        setExpenses(response.data);
      })
      .catch(() => {
        console.log("ERROR; Data has NOT received from the server!");
      });
    // console.log("this is the list of expenses from the server", getExpenses);
    //  console.log(getExpenses.category)
  }, []);

  const getData = expenses.map((expense, index) => {
    return expense.amount;
  });
  console.log("I am the expense amounts", getData);

  return <>
  <h1>{getData}</h1>
  </>;
}

export default GraphSample;
