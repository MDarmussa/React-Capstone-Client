import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  Grid,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "./SeverityPill";
import axios from "axios";
import { useEffect, useState } from "react";


// const payload={

//   _id:"",
//   category:"",
//   amount: 0,
//   paymentMethod:"",
//   date:"",
//   comment:" ",
//   username : ""

// }

// const orders = [
//   {
//     id: uuid(),
//     ref: 'CDD1049',
//     amount: 30.5,
//     customer: {
//       name: 'Ekaterina Tankova'
//     },
//     createdAt: 1555016400000,
//     status: 'pending'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1048',
//     amount: 25.1,
//     customer: {
//       name: 'Cao Yu'
//     },
//     createdAt: 1555016400000,
//     status: 'delivered'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1047',
//     amount: 10.99,
//     customer: {
//       name: 'Alexa Richardson'
//     },
//     createdAt: 1554930000000,
//     status: 'refunded'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1046',
//     amount: 96.43,
//     customer: {
//       name: 'Anje Keizer'
//     },
//     createdAt: 1554757200000,
//     status: 'pending'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1045',
//     amount: 32.54,
//     customer: {
//       name: 'Clarke Gillebert'
//     },
//     createdAt: 1554670800000,
//     status: 'delivered'
//   },
//   {
//     id: uuid(),
//     ref: 'CDD1044',
//     amount: 16.76,
//     customer: {
//       name: 'Adam Denisov'
//     },
//     createdAt: 1554670800000,
//     status: 'delivered'
//   }
// ];

export const LatestExpenses = (props) => {
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

  return (
    <>
      {/* <Grid
        container={true}
        xs={12}
        padding={12}
        className="sign-container"
        sx={{
          m: 0.5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {expenses.map((expense, index) => {
          console.log(expense)
          // return(
          
          //   <>
          // <h3>{expense._id}</h3>
          // <h3>{expense.category}</h3>
          // <h3>{expense.amount}</h3>
          // </>


          
          // )
        })}
      </Grid> */}
  

  
    <Card >
      <CardHeader title="Recent Expenses" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                 Category
                
                </TableCell>
                <TableCell>
                <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                  Amount 
                  </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell sortDirection="desc">
                  
                      Payment Method
                   
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Comment
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {orders.map((order) => ( */}
                {expenses.map((expense, index) => (
                <TableRow
                  hover
                  key={index}
                >
                     <TableCell>
                    {expense.category}
                  </TableCell>
                  <TableCell>
                    {expense.amount}
                  </TableCell>
                  <TableCell>
                    {expense.paymentMethod}
                  </TableCell>
                  <TableCell>
                   { expense.date}
                  </TableCell>  
                  <TableCell>
                  { expense.comment}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
    )
    </>
  );
};
