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




export const LatestExpenses = (props) => {
  const [expenses, setExpenses] = useState([]);
  const [deleteExpense, setDeleteExpense] =useState('')
  const { user } = props;

  useEffect(() => {
    const getExpenses = axios({
      url: `http://localhost:8080/expense/userExpenses/${user._id}`, //taken from server.js line 33
      method: "GET",
    })
      .then((response) => {
        setExpenses(response.data);
      })
      .catch(() => {
        console.log("ERROR; Data has NOT received from the server!");
      });
  }, []);

  const removeData = (id) => {
    axios.delete(`http://localhost:8080/expense/${expenses._id}`).then(res => {
        const del = deleteExpense.filter(deleteExpense => expenses._id !== deleteExpense.expenses._id)
        setDeleteExpense('')
    })
  }

  return (
    <>
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
                  <TableCell>
                    <button value={expense.id}>Delete</button>
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
