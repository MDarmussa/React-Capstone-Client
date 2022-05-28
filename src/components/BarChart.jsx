import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { cardActionAreaClasses } from "@mui/material";
import { ConstructionOutlined } from "@mui/icons-material";

function BarChart(props) {
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

  let cat = [];
  let amt = [];

  const expensesByCat = expenses.map((expense) => {
    console.log("i should be in the graph", expense.category);
     cat.push(expense.category);
  });

  const expensesByAmount = expenses.map((amount) => {
    console.log("i am the amount of the bar ", amount.amount);
     amt.push(amount.amount);
  });

  console.log("category array is:", cat)
  console.log("amount array is:", amt)

  const [graphData, setGraphData] = useState({
    labels: cat, //labelling of each bar  in the chart ; represent each bar ; expecting an array so this is in array format 
    datasets: [
      {
        label: "Expenses by Category",
        data: amt, //expecting an array so this is in array format 
        
      },
    ],
  });

  return <Bar data={graphData} />;
}

export default BarChart;
