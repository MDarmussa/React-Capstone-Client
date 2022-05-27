// import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";

// function GraphSample(props) {
//   const [expenses, setExpenses] = useState([]);

//   const { user } = props;

//   useEffect(() => {
//     const getExpenses = axios({
//       url: `http://localhost:8080/expense/userExpenses/${user._id}`, //taken from server.js line 33
//       method: "GET",
//       // data: payload
//     })
//       .then((response) => {
//         console.log("I am the response", response);
//         setExpenses(response.data);
//       })
//       .catch(() => {
//         console.log("ERROR; Data has NOT received from the server!");
//       });
//     // console.log("this is the list of expenses from the server", getExpenses);
//     //  console.log(getExpenses.category)
//   }, []);

//   const [chartData, setChartData] = useState({});

//   setChartData({
//     //updating chartData to hold the items fromthe mondo db
//     labels: expenses.map((expense) => expense.category),
//     datasets: [
//       {
//         label: "categories in USD",
//         data: getData,
//         // expenses.map((expense) => expense.amount),
//         backgroundColor: [
//           "#ffbb11",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],
//       },
//     ],
//   });

//   const getData = expenses.map((expense, index) => {
//     return expense.amount;
//   });
//   console.log("I am the expense amounts", getData);

//   //   return(
//   //   <>
//   //   <h1>{getData}</h1>

//   //   </>
//   //   )

//   return (
//     <div>
//       <canvas id="myChart">
//         <Bar
//           data={chartData}
//           options={{
//             plugins: {
//               title: {
//                 display: true,
//                 text: "Cryptocurrency prices",
//               },
//               legend: {
//                 display: true,
//                 position: "bottom",
//               },
//             },
//           }}
//         />
//       </canvas>
//     </div>
//   );
// }

// export default GraphSample;
